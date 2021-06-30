# complex-k8s

## Install

1. Install *ingress-nginx*

    See https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac

    ```bash
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.47.0/deploy/static/provider/cloud/deploy.yaml
    ```

    Verify the service was enabled by running the following

    ```bash
    kubectl get pods -n ingress-nginx
    ```

2. Add secrets *pgpassword*

    ```bash
    kubectl create secret generic pgpassword --from-literal PGPASSWORD=password
    ```

3. Deploy project

    ```bash
    kubectl apply -f k8s/
    ```

4. Check if project is running

    http://localhost/

## Dashboard

1. Enable skipping of login

    ```bash
    kubectl patch deployment kubernetes-dashboard -n kubernetes-dashboard --type 'json' -p '[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--enable-skip-login"}]'
    ```

2. Run proxy

    ```bash
    kubectl proxy
    ```

3. Open URL in browser

    http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/overview?namespace=default

## Delete

```bash
kubectl delete -f k8s/
kubectl delete namespace ingress-nginx
```

## Development

### Getting started

```bash
skaffold dev
```
