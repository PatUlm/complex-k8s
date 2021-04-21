# complex-k8s

## Install

1. Install *ingress-nginx*

    See https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac

    ```
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml
    ```

2. Add secrets *pgpassword*

    ```
    kubectl create secret generic pgpassword --from-literal PGPASSWORD=password
    ```

3. Deploy project

    ```
    kubectl apply -f k8s/
    ```

4. Check if project is running

    http://localhost/

## Dashboard

1. Run proxy

    ```lang=bash
    kubectl proxy
    ```

2. Open URL in Browser

    http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/overview?namespace=default
