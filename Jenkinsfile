pipeline {
    agent any
    
    environment {
        // Define your environment variables here
        AWS_REGION = 'ap-south-1'
        ECR_REPO_URL = '059407755516.dkr.ecr.ap-south-1.amazonaws.com'
        DOCKER_IMAGE_NAME = 'iverse-student-fe-webapp'
        IMAGE_TAG= 'dev-v'
        BRANCH_NAME= 'dev'
        DOCKER_SHORT_ID= ''
    }
    stages {
        stage('Checkout') {
            when {
                branch 'dev'
            }
            steps {
                script {
                    // Checkout the GitHub repository with the current branch
                    git branch: "${BRANCH_NAME}", url: 'git@github.com:iquantadev/iVerse-student-web-frontend.git'
                }
            }
        }
        stage('WebApplication') {
        stages {
            stage('Build and Push Docker Image') {
                when {
                    branch 'dev'
                }
            steps {
                script {
                    sh "whoami"
                    sh "pwd"
                    sh "ls -la"
                    sh "aws --version"
                    sh "docker --version"                    
                    // Authenticate with AWS ECR
                    sh "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin $ECR_REPO_URL"
                    // Build and tag the Docker image
                    sh "docker build -t $ECR_REPO_URL/$DOCKER_IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER ."
                    //DOCKER_IMAGE_ID = sh(script: "docker build -q -t $ECR_REPO_URL/$DOCKER_IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER ./auth-service", returnStdout: true).trim()                    
                    // Get the Docker image ID using docker inspect
                    DOCKER_SHORT_ID = sh(script: "docker inspect --format='{{.Id}}' $ECR_REPO_URL/$DOCKER_IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER", returnStdout: true).trim()
                    // Extract the short ID (first 12 characters)
                    DOCKER_SHORT_ID = DOCKER_SHORT_ID.substring(0, 12)
                    // Push the Docker image to ECR
                    sh "docker push $ECR_REPO_URL/$DOCKER_IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER"
                }
            }
            }
        stage('Update iverse-gitops repo') {
            when {
                branch 'dev'
            }
            steps {
                script {
                    // Checkout the GitHub repository with the current branch    
                    git branch: 'main', url: 'git@github.com:iquantadev/iverse-gitops.git'
                    sh "pwd"
                    sh "ls -la"
                    // Get the previous build number
                    def previousBuildNumber = currentBuild.getPreviousBuild()?.number
                    // Print the result
                    echo "Previous Build Number: ${previousBuildNumber ?: 'N/A'}"
                    def oldBuildNumber = currentBuild.number - 1
                    // Concatenate the string and build number
                    def concatenatedString = "${IMAGE_TAG}-${oldBuildNumber}"
                    // Print the result
                    echo "Concatenated String: $concatenatedString"
                    sh "sed -i 's/'${IMAGE_TAG}'-'${previousBuildNumber}'/'${IMAGE_TAG}'-'${BUILD_NUMBER}'/g' dev/iverse-student-fe-webapp/deployment.yaml"
                    sh "git status"
                    sh "git add ."
                    sh "git commit -am 'Updated iverse-stu webapp TAG'"
                    sh "git push origin main"
                    }
                }
            }  
        }
        }
        stage('Remove DockerImage') {
            steps {
                script {
                    // Removing DockerImage
                    echo "Docker Image Short ID: $DOCKER_SHORT_ID"
                    sh "docker rmi -f $DOCKER_SHORT_ID"
                    sh "docker system prune -f"
                    echo "Successfully Finished Removing Docker Image and Prune dangling images"
                }
            }
        }
    }
}
