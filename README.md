# Prelacion — Admision a conservatorios CV

Visualizador interactivo del sistema de prelacion para la admision a conservatorios de musica y danza en la Comunitat Valenciana, segun la Orden 8/2026.

**[Abrir la aplicacion](https://jlmirallesb.github.io/prelacion/)**

## Funcionalidades

- **Esquema**: vista jerarquica expandible de niveles de prioridad, prelacion y fases de adjudicacion
- **Timeline**: poster visual con todas las fases en orden cronologico
- **Guia paso a paso**: flowchart interactivo que determina tu nivel, prelacion y fase segun tu situacion
- **Edad**: calculadora de nivel de prioridad por edad y tipo de ensenanzas
- **Reorientacion**: herramienta para determinar a que cursos puede ser reorientado un aspirante que no supera la parte interpretativa (art. 8.9)
- **Definiciones**: glosario de terminos normativos con citas de la Orden
- **Publicador de vacantes**: Excel descargable con las 23 fases de adjudicacion para equipos directivos

## Caracteristicas

- Bilingue: castellano y valenciano
- Modo oscuro / claro
- Modo presentacion (`?modo=presentacion`)
- Enlaces compartibles a resultados del flowchart y la calculadora de edad
- Funciona offline (Alpine.js empaquetado localmente, sin CDN)
- Sin build: HTML + CSS + JS estatico, servido por GitHub Pages

## Normativa

Basado en la [Orden 8/2026](https://dogv.gva.es/es/resultat-dogv?signatura=2026/12242), de 24 de abril, de la Conselleria de Educacion, Cultura y Universidades. Texto navegable en [Legis CPMDEM](https://jlmirallesb.github.io/legis_cpmdem/es/ley/orden-8-2026/).

## Desarrollo

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000`. No requiere build ni dependencias.

## Autor

[Jose Luis Miralles Bono](https://www.jlmirall.es) con ayuda de [Claude](https://claude.ai).
