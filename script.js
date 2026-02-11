function mostrarPreguntas() {
    const campos = ["Nombre", "Apellido", "Edad", "Carrera", "Anio"];

    for (let c of campos) {
        const input = document.getElementById(c);
        if (!input || !input.value.trim()) {
            alert("Completa todos los campos");
            return;
        }
    }

    document.getElementById("formUsuario").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
}

function calcularResultado() {
    let total = 0;

    for (let i = 1; i <= 10; i++) {
        const r = document.querySelector(`input[name="p${i}"]:checked`);
        if (!r) {
            alert("Responde todas las preguntas");
            return;
        }
        total += parseInt(r.value);
    }

    // Conversión a porcentaje
    const porcentaje = Math.round(((total - 10) / 20) * 100);

    let nivel = "";
    let descripcion = "";
    let impacto = "";
    let recomendacion = "";

    if (porcentaje <= 25) {
        nivel = "Sintomatología mínima";
        descripcion = `
            Los síntomas depresivos aparecen de forma ocasional y con baja intensidad.
            No predominan en tu estado emocional actual.
        `;
        impacto = `
            El funcionamiento diario se mantiene estable, con leves momentos de cansancio
            emocional o desánimo transitorio.
        `;
        recomendacion = `
            Mantén hábitos saludables y presta atención a cambios emocionales persistentes.
        `;
    } 
    else if (porcentaje <= 50) {
        nivel = "Depresión leve";
        descripcion = `
            Los síntomas están presentes con mayor regularidad.
            Existe una vulnerabilidad emocional evidente.
        `;
        impacto = `
            Puede haber disminución de la motivación, concentración irregular
            y menor disfrute de algunas actividades.
        `;
        recomendacion = `
            El acompañamiento psicológico preventivo puede ser de gran utilidad.
        `;
    } 
    else if (porcentaje <= 75) {
        nivel = "Depresión moderada";
        descripcion = `
            Los síntomas son frecuentes y generan malestar psicológico significativo.
        `;
        impacto = `
            Se observa un impacto claro en el rendimiento académico, social o personal,
            así como aislamiento emocional.
        `;
        recomendacion = `
            Se recomienda iniciar atención psicológica profesional.
            La intervención temprana mejora notablemente el pronóstico.
        `;
    } 
    else {
        nivel = "Depresión severa";
        descripcion = `
            El patrón de respuestas indica síntomas intensos y persistentes.
            El sufrimiento emocional es profundo.
        `;
        impacto = `
            Existe una afectación importante del funcionamiento diario y la calidad de vida.
            Este nivel sugiere alto riesgo clínico.
        `;
        recomendacion = `
            Es prioritario buscar ayuda profesional especializada lo antes posible.
            No enfrentes esta situación en soledad.
        `;
    }

    document.getElementById("preguntas").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    document.getElementById("mensajeResultado").innerHTML = `
        <h3 style="color:#4b0082;">${nivel}</h3>

        <p><strong>Puntaje bruto:</strong> ${total} / 30</p>
        <p><strong>Porcentaje de afectación:</strong> ${porcentaje}%</p>

        <p><strong>Descripción clínica:</strong><br>${descripcion}</p>
        <p><strong>Impacto funcional:</strong><br>${impacto}</p>
        <p><strong>Recomendación:</strong><br>${recomendacion}</p>

        <hr>

        <p style="font-size: 0.85em; color:#555;">
            Este test es una herramienta de orientación psicológica basada en la frecuencia
            de síntomas asociados a la depresión. No constituye un diagnóstico clínico.
            Si te identificas con los resultados, buscar ayuda profesional puede marcar una diferencia real.
        </p>
    `;
}
