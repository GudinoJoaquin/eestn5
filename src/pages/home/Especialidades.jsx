import React, { useState } from "react";
import Nav from "../../components/Nav";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
import experto from "../../assets/img/experto.svg";
import experto2 from "../../assets/img/experto2.svg";

export default function Contacto() {
  const [visibleSection, setVisibleSection] = useState("informatica");

  const showContent = (id) => {
    setVisibleSection(id);
  };

  return (
    <>
      <Parallax>
        <Nav />
        <header className="text-white flex flex-col justify-center items-start h-[101%] mx-[70px]">
          <h1 className="text-[100px] font-bold">Nuestras especialidades</h1>
          <p className=" text-start text-[25px]  text-wrap">
            En nuestra institución, los estudiantes tienen la oportunidad de
            especializarse en tres áreas fundamentales para la vida moderna:
            informática, electrónica y construcciones. La especialización en
            informática les brinda habilidades en desarrollo de software,
            análisis de datos y seguridad cibernética, mientras que en
            electrónica, adquieren conocimientos en diseño de circuitos
            analógicos y digitales, sistemas de comunicación inalámbrica y
            dispositivos electrónicos avanzados. Por otro lado, la
            especialización en construcciones los instruye en técnicas avanzadas
            de diseño arquitectónico, gestión de proyectos y aplicación de
            tecnologías de construcción sostenible. Estas habilidades preparan a
            los estudiantes para liderar proyectos innovadores y contribuir al
            progreso y bienestar de la sociedad actual.
          </p>
        </header>

        <main className="mb-[50px]">
          <div className="flex justify-center items-center gap-[50px]">
            <button
              onClick={() => showContent("informatica")}
              className={`flex flex-col justify-center items-center ${
                visibleSection === "informatica"
                  ? "bg-red-500 text-white"
                  : "bg-white"
              } py-[20px] px-[49px] rounded-[20px]`}
            >
              <img
                src={visibleSection === "informatica" ? experto : experto2}
                alt=""
                className=""
                width={100}
              />
              <p className="text-[30px]">Informática</p>
            </button>
            <button
              onClick={() => showContent("electronica")}
              className={`flex flex-col justify-center items-center ${
                visibleSection === "electronica"
                  ? "bg-red-500 text-white"
                  : "bg-white"
              } py-[20px] px-[49px] rounded-[20px]`}
            >
              <img
                src={visibleSection === "electronica" ? experto : experto2}
                alt=""
                className=""
                width={100}
              />
              <p className="text-[30px]">Electrónica</p>
            </button>
            <button
              onClick={() => showContent("construcciones")}
              className={`flex flex-col justify-center items-center ${
                visibleSection === "construcciones"
                  ? "bg-red-500 text-white"
                  : "bg-white"
              } py-[20px] px-[20px] rounded-[20px]`}
            >
              <img
                src={visibleSection === "construcciones" ? experto : experto2}
                alt=""
                className=""
                width={100}
              />
              <p className="text-[30px]">Construcciones</p>
            </button>
          </div>

          <hr className="border-2 border-gray-300 mx-[200px] my-[20px]" />

          {visibleSection === "informatica" && (
            <section>
              <div className="text-start mx-[220px]">
                <h2 className="font-bold text-[40px] underline underline-offset-2">
                  Informática Profesional y Personal
                </h2>
                <p className="text-[20px] italic mt-[20px]">
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
                <p className="text-[20px] italic mt-[20px]">
                  Áreas de competencia:
                </p>
                <ol className="font-bold list-decimal text-[20px] mx-[30px] mt-[20px] flex flex-col gap-[10px]">
                  <li>
                    Facilitar la operatoria del usuario, ayudando a organizar
                    sus archivos y dando apoyo para resolver problemas que
                    habitualmente se le presentan y que, por falta de tiempo o
                    conocimientos, están fuera de su alcance.
                  </li>
                  <li>
                    Mantener la integridad de los datos locales del usuario,
                    protegiéndolos mediante el resguardo preventivo de los
                    mismos, ejecutar acciones anti-virus, incluyendo
                    reparaciones de archivos afectados.
                  </li>
                  <li>
                    Instalar y poner en marcha componentes o sistemas, equipos y
                    redes, por entrega de nuevas versiones o ampliación de
                    capacidades, revisando configuraciones y resolviendo
                    problemas emergentes de la integración de los nuevos
                    componentes con los ya existentes.
                  </li>
                  <li>
                    Mantener equipos y sistemas de baja complejidad o
                    componentes de los mismos.
                  </li>
                  <li>
                    Optimizar el ambiente informático de trabajo del usuario,
                    desarrollar programas, o adaptar y complementar sus
                    funcionalidades.
                  </li>
                  <li>
                    Asesorar y apoyar en la compra y en la venta de productos o
                    servicios informáticos.
                  </li>
                  <li>
                    Autogestionar sus actividades, las de su sector dentro de la
                    organización, o emprendimiento propio.
                  </li>
                </ol>
              </div>
            </section>
          )}

          {visibleSection === "electronica" && (
            <section>
              <div className="text-start mx-[220px]">
                <h2 className="font-bold text-[40px] underline underline-offset-2">
                  Electrónica
                </h2>
                <p className="text-[20px] italic mt-[20px]">
                  El Técnico en Electrónica está capacitado, de acuerdo a las
                  actividades que se desarrollan en el perfil profesional, para
                  montar e instalar, operar y mantener componentes, productos,
                  equipos e instalaciones de electrónica analógica y/o digital;
                  realizar proyectos, diseños y desarrollos de tecnología
                  estándar; comercializar, seleccionar y asesorar en
                  componentes, productos, equipos e instalaciones electrónicas;
                  y participar y/o generar emprendimientos en electrónica.
                </p>
                <p className="text-[20px] italic mt-[20px]">
                  Áreas de competencia:
                </p>
                <ol className="font-bold list-decimal text-[20px] mx-[30px] mt-[20px] flex flex-col gap-[10px]">
                  <li>Proyectar componentes y productos electrónicos.</li>
                  <li>
                    Montar e instalar componentes, productos y equipos
                    electrónicos.
                  </li>
                  <li>
                    Operar y mantener componentes, productos y equipos
                    electrónicos.
                  </li>
                  <li>
                    Comercializar, seleccionar y asesorar en componentes,
                    productos, equipos e instalaciones electrónicas.
                  </li>
                  <li>Generar y/o participar de emprendimientos.</li>
                </ol>
              </div>
            </section>
          )}

          {visibleSection === "construcciones" && (
            <section>
              <div className="text-start mx-[220px]">
                <h2 className="font-bold text-[40px] underline underline-offset-2">
                  Maestro Mayor de Obras
                </h2>
                <p className="text-[20px] italic mt-[20px]">
                  El Maestro Mayor de Obra estará capacitado, de acuerdo a las
                  actividades que se desarrollan en el Perfil Profesional, para:
                </p>
                <p className="text-[20px] italic mt-[20px]">
                  Áreas de competencia:
                </p>
                <ol className="font-bold list-decimal text-[20px] mx-[30px] mt-[20px] flex flex-col gap-[10px]">
                  <li>
                    Analizar las necesidades de un cliente y elaborar el
                    programa de necesidades.
                  </li>
                  <li>
                    Elaborar proyectos completos de construcciones edilicias,
                    planificando, gestionando, administrando y controlando la
                    ejecución del proceso constructivo.
                  </li>
                  <li>Dirigir la ejecución de los procesos constructivos.</li>
                  <li>
                    Ejecutar obras edilicias y conducir grupos de trabajo a
                    cargo.
                  </li>
                  <li>
                    Proyectar, dirigir, planificar, gestionar, administrar y
                    controlar instalaciones correspondientes a energía,
                    comunicaciones, agua, desagües, confort y transporte.
                  </li>
                  <li>Prestar servicios de evaluación técnica a terceros.</li>
                  <li>
                    Asesorar técnicamente a terceros para la comercialización de
                    productos y/o servicios.
                  </li>
                </ol>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </Parallax>
    </>
  );
}
