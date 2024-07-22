document.getElementById('start-simulation').addEventListener('click', startSimulation);

function startSimulation() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const resultsDiv = document.getElementById('results');

    if (!startTime || !endTime) {
        resultsDiv.innerHTML = '<p>Por favor, ingrese las fechas y horas de inicio y fin de la simulación.</p>';
        return;
    }

    // Aquí se puede agregar la lógica de simulación
    // Datos de ejemplo basados en el documento proporcionado
    const trafficData = {
        "Lunes a Viernes": {
            "Norte-Sur": {
                "6:00-9:00": 119,
                "11:30-13:00": 105,
                "17:00-19:30": 120
            },
            "Sur-Norte": {
                "6:00-9:00": 117,
                "11:30-13:00": 98,
                "17:00-21:15": 76
            }
        },
        "Sábado y Domingo": {
            "Norte-Sur": {
                "13:00-15:00": 107,
                "6:00-20:00": 80
            },
            "Sur-Norte": {
                "7:00-9:30": 105,
                "4:30-22:00": 54
            }
        }
    };

    let output = `<p>Simulación iniciada desde: ${startTime}</p>`;
    output += `<p>Simulación finalizada en: ${endTime}</p>`;
    output += '<h3>Datos de tráfico:</h3>';

    for (let dayType in trafficData) {
        output += `<h4>${dayType}</h4>`;
        for (let direction in trafficData[dayType]) {
            output += `<h5>${direction}</h5>`;
            for (let timePeriod in trafficData[dayType][direction]) {
                output += `<p>${timePeriod}: ${trafficData[dayType][direction][timePeriod]} vehículos</p>`;
            }
        }
    }

    resultsDiv.innerHTML = output;
}
