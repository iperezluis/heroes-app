// Esta es una forma de conectar a AWS DynamoDB usando TypeScript:

import * as AWS from "aws-sdk"; // Importar la librería de AWS

const dynamoDb = new AWS.DynamoDB({
  // Crear una instancia de DynamoDB usando la configuración de AWS
  region: "us-east-1", // Especificar el region deseado
  accessKeyId: "<AWS_ACCESS_KEY>", // Tu clave de acceso de AWS
  secretAccessKey: "<AWS_SECRET_KEY>", // Tu clave secreta de AWS
});

// Usar la instancia para realizar operaciones en DynamoDB, por ejemplo, consultas y escrituras.
