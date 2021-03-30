# Text_Summarizer

docker run --gpus all -it --rm -v $PWD:/tf -p 8888:8888 -p 6006:6006 tensorflow/tensorflow:2.4.1-gpu-jupyter

 nvidia-docker run \
 --name tensorboard \
 -d \
 -v logs:/root/logs \
 -p 6006:6006 \
 tensorflow/tensorflow:latest-gpu \
 tensorboard --logdir /root/logs