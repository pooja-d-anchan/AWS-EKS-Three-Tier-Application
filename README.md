# 🚀 AWS EKS Three-Tier Application

![AWS](https://img.shields.io/badge/AWS-EKS-orange?logo=amazonaws\&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-blue?logo=kubernetes)
![Docker](https://img.shields.io/badge/Docker-Containers-blue?logo=docker)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)

---

## 📌 Project Overview

This project demonstrates the **end-to-end deployment of a scalable three-tier web application** on **AWS using Kubernetes (EKS)**.

It follows a **cloud-native microservices architecture** with:

* 🎨 **Frontend:** React (UI Layer)
* ⚙️ **Backend:** Node.js API (Business Logic)
* 🗄️ **Database:** MongoDB (Persistent Storage)

---

## 🏗️ Architecture Overview

```
User 
  ↓
AWS ALB (Ingress Controller)
  ↓
Frontend (React - Kubernetes Deployment)
  ↓
Backend API (Node.js - Kubernetes Deployment)
  ↓
MongoDB (Stateful - PVC + EBS Volume)
```

📌 **Key Concepts Used:**

* Kubernetes Deployments & Services
* ALB Ingress Controller (Path-based routing)
* Persistent Volumes (EBS CSI Driver)
* Containerized workloads (Docker + ECR)

---

## ⚙️ Tech Stack

| Layer            | Technology Used      |
| ---------------- | -------------------- |
| ☁️ Cloud         | AWS (EKS, ECR, ALB)  |
| 📦 Container     | Docker               |
| ⚙️ Orchestration | Kubernetes           |
| 🎨 Frontend      | React                |
| 🔧 Backend       | Node.js              |
| 🗄️ Database     | MongoDB              |
| 💾 Storage       | AWS EBS (CSI Driver) |

---

## 🚀 Key Features

✅ Deployed on **AWS EKS cluster using eksctl**
✅ Implemented **ALB Ingress for routing traffic**
✅ Used **Amazon ECR for container images**
✅ Configured **persistent storage using EBS**
✅ Managed secrets via **Kubernetes Secrets**
✅ Optimized deployment for **t3.micro instances**

---

## 🧠 Real-World Challenges Solved

💥 PVC stuck in **Pending state** → Fixed using EBS CSI Driver
💥 **ImagePullBackOff** → Resolved ECR authentication issue
💥 Node scaling issues → Adjusted nodegroup capacity
💥 Ingress routing issues → Fixed service port mismatch
💥 Cluster creation failure → Debugged CloudFormation errors

---

## 📂 Project Structure

```
Kubernetes-Manifests-file/
│
├── Frontend/
├── Backend/
├── Database/
└── ingress.yaml
```

---

## 🔧 Deployment Steps

```bash
# Create cluster
eksctl create cluster --name three-tier-cluster --region us-west-2

# Configure kubectl
aws eks update-kubeconfig --region us-west-2 --name three-tier-cluster

# Create namespace
kubectl create namespace three-tier

# Deploy components
kubectl apply -f Database/
kubectl apply -f Backend/
kubectl apply -f Frontend/

# Deploy ingress
kubectl apply -f ingress.yaml
```

---

🚀 Frontend (Hosted):
https://aws-eks-three-tier-application.vercel.app/

⚠️ Note: This project was deployed on AWS EKS using a temporary production-style cluster. 
To optimize AWS costs, the EKS cluster and ALB resources are currently decommissioned. 
Source code, Kubernetes manifests, and deployment steps are fully available in this repository.

🎥 Demo Video:
https://www.loom.com/share/08c50f4145d84fd0911915ff411b2b42

---

## 📸 Screenshots

* Running pods
  
  <img width="2185" height="213" alt="image" src="https://github.com/user-attachments/assets/34c04f02-2fda-4ddf-8cbf-1e9dc82203ad" />
  
  
  <img width="2234" height="560" alt="image" src="https://github.com/user-attachments/assets/8b77ea3d-b72e-41a7-b074-d85ed0af3f50" />

* ALB DNS
  
  <img width="2264" height="138" alt="image" src="https://github.com/user-attachments/assets/a6dad2cd-6cf8-4428-8a85-31c3b3a24f45" />

* UI in browser
  
 <img width="3071" height="1295" alt="image" src="https://github.com/user-attachments/assets/4077151c-8da2-43e2-a346-9788dcf7aff2" />

---

## 👩‍💻 Author

**Pooja**
DevOps Enthusiast | AWS | Kubernetes

---
