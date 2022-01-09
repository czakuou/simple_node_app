# Simple Node APP with Express

Make sure you have Docker installed on your machine

#### To start project for first time and install all dependencies type in terminal

`make docker-compose`

#### To just run the project type in terminal

`make app-start`

#### To stop the project type

`make app-stop`

## install pre-commit

### If you want to make a commit you have to install pre-commit hooks

#### Using pip:

`pip install pre-commit`

#### Using homebrew:

`brew install pre-commit`

#### Using conda

`conda install -c conda-forge pre-commit`

#### Then run in terminal from home directory

`pre-commit install`

#### You can check all files before commiting by typing

`make commit`
