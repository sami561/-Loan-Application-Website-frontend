pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dh_cred')
    }
    triggers {
        pollSCM('*/5 * * * *') // Check every 5 minutes
    }

    stages {
        stage('Checkout') {
            agent any
            steps {
                echo "Getting source code"
                checkout scm
            }
        }
        stage('Init'){
            steps{
            // Permet l'authentification
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build'){
            steps {
                sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/front-pfa::$BUILD_ID  .'
            }
        }
        
        stage('Deliver'){
            steps {
                sh 'docker push $DOCKERHUB_CREDENTIALS_USR/front-pfa::$BUILD_ID'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/front-pfa::$BUILD_ID'
                sh 'docker logout'
            }
        }
    }

    post {
        failure {
            emailext subject: 'Build Failure: ${currentBuild.fullDisplayName}',
                      body: 'The pipeline failed to build. Please check the Jenkins console output for more details.',
                      recipientProviders: [developers()],
                      to: 'semiayachi.contact@gmail.com'
        }
    }
}