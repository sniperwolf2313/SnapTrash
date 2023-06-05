# Usa una imagen base de TensorFlow
FROM tensorflow/tensorflow:latest

# Instala las dependencias necesarias
RUN apt-get update && \
    apt-get install -y python3-pil python3-tk && \
    rm -rf /var/lib/apt/lists/*

# Copia los archivos necesarios al contenedor
WORKDIR /app
COPY requirements.txt /app
COPY app.py /app

# Instala las dependencias de Python
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Define el comando predeterminado para ejecutar la aplicación
CMD ["python3", "app.py"]
