import tkinter as tk
from tkinter import filedialog
from PIL import Image
import numpy as np
import tensorflow as tf

# Crea una ventana para seleccionar un archivo
root = tk.Tk()
root.withdraw()
ruta_de_la_imagen = filedialog.askopenfilename()

# Carga la imagen seleccionada
imagen = Image.open('ruta_de_la_imagen')

# Preprocesa la imagen
ancho, alto = (128, 128)  # ajusta el tamaño según la entrada del modelo
imagen = imagen.resize((ancho, alto))
imagen = np.array(imagen)
imagen = imagen / 255.0  # normaliza la imagen

if len(imagen.shape) == 2:  # si la imagen es en escala de grises
    imagen = np.expand_dims(imagen, axis=-1)
elif imagen.shape[-1] == 4:  # si la imagen tiene un canal de transparencia
    imagen = imagen[..., :3]
imagen = np.expand_dims(imagen, axis=0)  # agrega una dimensión adicional para indicar el tamaño del lote (batch size)

# Carga el modelo entrenado
modelo = tf.keras.models.load_model('modeloIA/model.json')

# Haz predicciones con el modelo
predicciones = modelo.predict(imagen)

# Selecciona el archivo .bin correspondiente a la clase predicha
clase_predicha = np.argmax(predicciones, axis=1)
nombre_archivo = 'clase_{}.bin'.format(clase_predicha[0])

# Imprime el nombre del archivo .bin correspondiente a la clase predicha
print(nombre_archivo)
