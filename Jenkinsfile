pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-react-app'
        CONTAINER_NAME = 'react-container'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Get the code from GitHub
                git 'https://github.com/your-username/your-repo-name.git'
            }
        }

        stage('Inject .env') {
            steps {
                sh 'cp /path/to/local/.env .env'
            }
        }


        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Stop Old Container') {
            steps {
                // Gracefully stop and remove old container
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
            }
        }

        stage('Run New Container') {
            steps {
                // Run new version
                sh 'docker run -d -p 80:80 --name $CONTAINER_NAME $DOCKER_IMAGE'
            }
        }
    }

    post {
        failure {
            echo '❌ Deployment failed!'
        }
        success {
            echo '✅ App deployed successfully!'
        }
    }
}
