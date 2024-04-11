# Spread_API

## Documentación

[Documentación🎉](https://valerianazal.github.io/Spread-API-Documentation/#spread-api)

## Docker
Para correr el contenedor se deben seguir los siguientes pasos:
1. Hacer `build` de la siguiente manera
```
docker build -t spread-api .    
```
2. Correr el contenedor con el siguiente comando
```
docker run spread-api   
``` 

## Supuestos Adicionales
- Se utiliza un archivo `.txt` para guardar el spread "alerta"
- Si no hay órdenes de compra ni órdenes de venta, se retorna `null`
- Si no hay órdenes de compra u órdenes de venta se levanta un error
