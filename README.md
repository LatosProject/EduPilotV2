# EduPilot V2

## 🛠️ 安装与运行指南

### ✅ 环境要求

- Python >= 3.9
- pip
- Redis
- Node.js

---

### 📦 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/LatosProject/EduPilot.git
cd EduPilot
```

#### 2. 创建虚拟环境并激活

**macOS / Linux：**

```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows：**

```bash
python -m venv venv
venv\Scripts\activate
```

#### 3. 安装依赖

```bash
pip install -r requirements.txt
```

---

### ⚙️ 配置环境变量

在项目根目录下创建 `.env` 文件，并参考 `.env.example` 进行配置。

---

### 🚀 启动应用

启动后端

```bash
uvicorn app.main:app --reload
```

启动前端

```bash
npm run dev
```

访问接口文档：

- Swagger UI: http://127.0.0.1:8000/docs
- Redoc: http://127.0.0.1:8000/redoc

---