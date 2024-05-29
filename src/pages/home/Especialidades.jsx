import React, { useState } from "react";
import Nav from "../../components/Nav";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";

export default function Contacto() {
  const [visibleSection, setVisibleSection] = useState("informatica");

  const showContent = (id) => {
    setVisibleSection(id);
  };

  return (
    <>
      <body className="bg-white dark:bg-[#2D2D2D] dark:text-white">
        <Parallax>
          <Nav />
          <header className="text-white flex flex-col justify-center items-center mx-4 md:items-start md:mx-[70px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-4 md:mb-8 md:mt-20 text-center md:text-left m-10 animate-fade-in-right">
              Nuestras Especialidades
            </h1>
            <p className="text-sm md:text-lg lg:text-xl  backdrop-blur-lg p-1 md:p-5 rounded-lg mt-10 text-center md:text-left m-10 animate-fade-in-up">
              En nuestra institución, los estudiantes tienen la oportunidad de
              especializarse en tres áreas fundamentales para la vida moderna:
              informática, electrónica y construcciones. La especialización en
              informática les brinda habilidades en desarrollo de software,
              análisis de datos y seguridad cibernética, mientras que en
              electrónica, adquieren conocimientos en diseño de circuitos
              analógicos y digitales, sistemas de comunicación inalámbrica y
              dispositivos electrónicos avanzados. Por otro lado, la
              especialización en construcciones los instruye en técnicas
              avanzadas de diseño arquitectónico, gestión de proyectos y
              aplicación de tecnologías de construcción sostenible. Estas
              habilidades preparan a los estudiantes para liderar proyectos
              innovadores y contribuir al progreso y bienestar de la sociedad
              actual.
            </p>
          </header>
        </Parallax>
        <main className="mt-[50px] mb-[50px]">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8 mt-10">
            <button
              onClick={() => showContent("informatica")}
              className={`border flex flex-col justify-center items-center bg-white dark:bg-[#2D2D2D] text-gray-800 py-2 px-4 md:py-3 md:px-6 rounded-lg transform transition-all duration-300 ${
                visibleSection === "informatica"
                  ? "border border-red-500 bg-red-500 text-red-500 scale-105 transition-transform duration-300 dark:text-white"
                  : "hover:bg-red-100 hover:text-red-700 dark:text-gray-400 border-gray-400"
              }`}
            >
              <p className="text-sm md:text-lg">Informática</p>
            </button>
            <button
              onClick={() => showContent("construcciones")}
              className={`border flex flex-col justify-center items-center bg-white dark:bg-[#2D2D2D] text-gray-800 py-2 px-4 md:py-3 md:px-6 rounded-lg transform transition-all duration-300 ${
                visibleSection === "construcciones"
                  ? "border border-red-500 bg-red-500 text-red-500 scale-105 transition-transform duration-300 dark:text-white"
                  : "hover:bg-red-100 hover:text-red-500 dark:text-gray-400 border-gray-400"
              }`}
            >
              <p className="text-sm md:text-lg">Construcciones</p>
            </button>
            <button
              onClick={() => showContent("electronica")}
              className={`border flex flex-col justify-center items-center bg-white dark:bg-[#2D2D2D] text-gray-800 py-2 px-4 md:py-3 md:px-6 rounded-lg transform transition-all duration-300 ${
                visibleSection === "electronica"
                  ? "border border-red-500 bg-red-500 text-red-500 scale-105 transition-transform duration-300 dark:text-white"
                  : "hover:bg-red-100 hover:text-red-700 dark:text-gray-400 border-gray-400"
              }`}
            >
              <p className="text-sm md:text-lg">Electrónica</p>
            </button>
          </div>

          <hr
            className="border-1 border-red-600 mx-auto my-[30px]"
            style={{ width: "50vw" }}
          />

          {visibleSection === "informatica" && (
            <section>
              <div className="mx-4 md:mx-[220px] animate-shake">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl underline underline-offset-2 mt-8 mb-4">
                  Informática Profesional y Personal
                </h2>
                <p className="text-sm md:text-lg italic mt-4">
                  El Técnico en Informática Profesional y Personal estará
                  capacitado para asistir al usuario de productos o servicios
                  informáticos brindándole servicios de instalación,
                  capacitación, sistematización, mantenimiento primario,
                  resolución de problemas derivados de la operatoria, y apoyo a
                  la contratación de productos o servicios informáticos,
                  desarrollando las actividades descriptas en el perfil
                  profesional y pudiendo actuar de nexo entre el especialista o
                  experto en el tema, producto o servicio y el usuario final.
                </p>
                <p className="text-sm md:text-lg font-bold mt-4">
                  Áreas de competencia:
                </p>
                <ol className="text-sm md:text-lg ml-4 mt-4 list-disc">
                  <li style={{ marginBottom: "8px" }}>
                    Facilitar la operatoria del usuario, ayudando a organizar
                    sus archivos y dando apoyo para resolver problemas que
                    habitualmente se le presentan y que, por falta de tiempo o
                    conocimientos, están fuera de su alcance.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Mantener la integridad de los datos locales del usuario,
                    protegiéndolos mediante el resguardo preventivo de los
                    mismos, ejecutar acciones anti-virus, incluyendo
                    reparaciones de archivos afectados.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Instalar y poner en marcha componentes o sistemas, equipos y
                    redes, por entrega de nuevas versiones o ampliación de
                    capacidades, revisando configuraciones y resolviendo
                    problemas emergentes de la integración de los nuevos
                    componentes con los ya existentes.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Mantener equipos y sistemas de baja complejidad o
                    componentes de los mismos.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Optimizar el ambiente informático de trabajo del usuario,
                    desarrollar programas, o adaptar y complementar sus
                    funcionalidades.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Asesorar y apoyar en la compra y en la venta de productos o
                    servicios informáticos.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Autogestionar sus actividades, las de su sector dentro de la
                    organización, o emprendimiento propio.
                  </li>
                </ol>
              </div>
            </section>
          )}

          {visibleSection === "electronica" && (
            <section>
              <div className="mx-4 md:mx-[220px] animate-shake">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl underline underline-offset-2 mt-8 mb-4">
                  Electrónica
                </h2>
                <p className="text-sm md:text-lg italic mt-4">
                  El Técnico en Electrónica está capacitado, de acuerdo a las
                  actividades que se desarrollan en el perfil profesional, para
                  montar e instalar, operar y mantener componentes, productos,
                  equipos e instalaciones de electrónica analógica y/o digital;
                  realizar proyectos, diseños y desarrollos de tecnología
                  estándar; comercializar, seleccionar y asesorar en
                  componentes, productos, equipos e instalaciones electrónicas;
                  y participar y/o generar emprendimientos en electrónica.
                </p>
                <p className="text-sm md:text-lg font-bold mt-4">
                  Áreas de competencia:
                </p>
                <ol className="text-sm md:text-lg list-disc ml-4 mt-4">
                  <li style={{ marginBottom: "8px" }}>
                    Proyectar componentes y productos electrónicos.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Montar e instalar componentes, productos y equipos
                    electrónicos.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Operar y mantener componentes, productos y equipos
                    electrónicos.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Comercializar, seleccionar y asesorar en componentes,
                    productos, equipos e instalaciones electrónicas.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Generar y/o participar de emprendimientos.
                  </li>
                </ol>
              </div>
            </section>
          )}

          {visibleSection === "construcciones" && (
            <section>
              <div className="mx-4 md:mx-[220px] animate-shake">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl underline underline-offset-2 mt-8 mb-4">
                  Maestro Mayor de Obras
                </h2>
                <p className="text-sm md:text-lg italic mt-4">
                  El Maestro Mayor de Obra estará capacitado, de acuerdo a las
                  actividades que se desarrollan en el Perfil Profesional, para:
                </p>
                <p className="text-sm md:text-lg font-bold mt-4">
                  Áreas de competencia:
                </p>
                <ol className="text-sm md:text-lg list-disc ml-4 mt-4">
                  <li style={{ marginBottom: "8px" }}>
                    Analizar las necesidades de un cliente y elaborar el
                    programa de necesidades.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Elaborar proyectos completos de construcciones edilicias,
                    planificando, gestionando, administrando y controlando la
                    ejecución del proceso constructivo.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Dirigir la ejecución de los procesos constructivos.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Ejecutar obras edilicias y conducir grupos de trabajo a
                    cargo.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Proyectar, dirigir, planificar, gestionar, administrar y
                    controlar instalaciones correspondientes a energía,
                    comunicaciones, agua, desagües, confort y transporte.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Prestar servicios de evaluación técnica a terceros.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Asesorar técnicamente a terceros para la comercialización de
                    productos y/o servicios.
                  </li>
                </ol>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </body>
    </>
  );
}
