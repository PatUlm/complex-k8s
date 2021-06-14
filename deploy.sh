docker build -t pulmer75/complex-client:latest -t pulmer75/complex-client:$GIT_SHA -f ./client/Dockerfile ./client
docker build -t pulmer75/complex-server:latest -t pulmer75/complex-server:$GIT_SHA -f ./server/Dockerfile ./server
docker build -t pulmer75/complex-worker:latest -t pulmer75/complex-worker:$GIT_SHA -f ./worker/Dockerfile ./worker

docker push pulmer75/complex-client:latest
docker push pulmer75/complex-client:$GIT_SHA
docker push pulmer75/complex-server:latest
docker push pulmer75/complex-server:$GIT_SHA
docker push pulmer75/complex-worker:latest
docker push pulmer75/complex-worker:$GIT_SHA

#kubectl apply -f k8s
#kubectl set image deployments/client-deployment server=pulmer75/complex-client
#kubectl set image deployments/server-deployment server=pulmer75/complex-server
#kubectl set image deployments/worker-deployment server=pulmer75/complex-worker
