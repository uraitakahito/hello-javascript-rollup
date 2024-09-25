## How to launch

Build your docker image:

```sh
PROJECT=$(basename `pwd`) && docker image build -t $PROJECT-image . --build-arg user_id=`id -u` --build-arg group_id=`id -g`
```

And run it:

```sh
docker container run -it --rm --init -p 3000:3000 -e NODE_ENV=development --mount type=bind,src=`pwd`,dst=/app --mount type=bind,src=$HOME/.gitconfig,dst=/home/developer/.gitconfig --name $PROJECT-container $PROJECT-image /bin/zsh
```

Run the following commands inside the Docker containers:

```sh
npm ci
rollup -c
```
