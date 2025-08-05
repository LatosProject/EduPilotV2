import os
import time
import requests

def wait_for_service(url, timeout=30, interval=1):
    start_time = time.time()
    while True:
        try:
            r = requests.get(url, timeout=2)
            if r.status_code == 200:
                return True
        except requests.RequestException:
            pass

        if time.time() - start_time > timeout:
            return False

        time.sleep(interval)

def main():
    host = os.getenv("APP_HOST", "127.0.0.1")
    port = int(os.getenv("APP_PORT", 8000))
    base_url = f"http://{host}:{port}"
    health_url = base_url + "/health"   
    login_endpoint = f"{base_url}/api/v1/auth/login"

    login_data = {"username": "test_account", "password": "test_password"}
    if not wait_for_service(health_url, timeout=30, interval=1):
        exit(1)
    try:
        response = requests.post(login_endpoint, json=login_data, timeout=5)
        if response.status_code != 200:
            exit(1)
    except requests.RequestException as e:
        exit(1)

if __name__ == "__main__":
    main()