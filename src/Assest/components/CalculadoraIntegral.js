
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { CLP, num } from '../Utils/Formato';

function CalculadoraIntegral() {

    const [PotenciaPanel, setPotenciaPanel] = useState(0);
    const [CantidadPaneles, setCantidadPaneles] = useState(0);
    const [precioInversor, setprecioInversor] = useState(0);
    const [precioBateria, setprecioBateria] = useState(0);
    const [cantidadBaterias, setcantidadBaterias] = useState(0);
    const [precioEstructura, setprecioEstructura] = useState(0);
    const [instalacionBase, setinstalacionBase] = useState(0);
    const [pesoEnvio, setpesoEnvio] = useState(0);
    const [tipoTecho, setTipoTecho] = useState("");
    const [region, setregion] = useState("");
    const [complejidad, setcomplejidad] = useState("");
    const [subsidio, setsubsidio] = useState("");
    const [metodoEnvio, setmetodoEnvio] = useState("");
    const [garantia, setgarantia] = useState("");
    const [planPago, setplanPago] = useState("");
    const [tipoPie, settipoPie] = useState("");
    const [valorPie, setvalorPie] = useState(0);


    const potenciaEstimada = (num(PotenciaPanel) * num(CantidadPaneles));
    const subtotalEquipos = num(precioInversor) + (num(precioBateria) * num(cantidadBaterias)) + num(precioEstructura);

    //calculo para opciones
    const recargoTecho = tipoTecho == "Teja" ? subtotalEquipos * 0.05 : tipoTecho == "Fibro" ? subtotalEquipos * 0.03 : 0;
    const subsidioAplicado = subsidio == "10%" ? subtotalEquipos * 0.10 : subsidio == "20%" ? subtotalEquipos * 0.20 : 0;
    const instalacionFinal = num(instalacionBase) + (complejidad == "Media" ? num(instalacionBase) * 0.05 : complejidad == "Alta" ? num(instalacionBase) * 0.10 : 0) + recargoTecho - subsidioAplicado;

    //iva no aplica ni a garantia ni envios etc 
    const iva = ((subtotalEquipos + recargoTecho + instalacionFinal) - subsidioAplicado) * 0.19;
    const envioBase = (region == "RM" ? 5000 : region == "V" ? 7000 : region == "VI" ? 9000 : 0);
    const envio = envioBase * (metodoEnvio == "Rapido" ? 1.10 : metodoEnvio == "Estandar" ? 1.00 : 1.00);
    const garantiaExtra = garantia == "12 meses" ? subtotalEquipos * 0.02 : garantia == "24 meses" ? subtotalEquipos * 0.04 : 0;

    //suma todos los calculos anteriores
    const totalAntesFinanciar = subtotalEquipos + instalacionFinal + iva + envio + garantiaExtra;
    const pie = tipoPie == "Porcentaje" ? (totalAntesFinanciar * num(valorPie)) / 100 : tipoPie == "Monto fijo" ? num(valorPie) : 0;
    const meses = planPago == "12 meses" ? 12 : planPago == "24 meses" ? 24 : 0;
    const interesTotal = planPago == "12 meses" ? totalAntesFinanciar * 0.12 : planPago == "24 meses" ? totalAntesFinanciar * 0.24 : 0;
    const cuota = meses > 0 ? (totalAntesFinanciar + interesTotal - pie) / meses : 0;
    const totalFinal = totalAntesFinanciar + interesTotal - pie;

    return (
        <div className="container mt-4 ">

            <div className="col-12 d-flex flex-column flex-md-row justify-content-between p-1 mb-1"  >
                <h4 className="fw-bold  mb-0">DEMO calculadora</h4>
                <p className="text-secondary fst-italic">
                    Maquetado de formulario y resumen. 
                </p>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="PotenciaPanel">Potencia del panel (W)</label>
                            <input className="form-control" id="PotenciaPanel" placeholder="450"
                                value={PotenciaPanel} onChange={(e) => setPotenciaPanel(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="CantidadPaneles">Cantidad de paneles</label>
                            <input className="form-control" id="CantidadPaneles" placeholder="8"
                                value={CantidadPaneles} onChange={(e) => setCantidadPaneles(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="precioInversor">Inversor (Precio)</label>
                            <input className="form-control" id="precioInversor" placeholder="100000"
                                value={precioInversor} onChange={(e) => setprecioInversor(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="precioBateria">Batería (Precio por unidad)</label>
                            <input className="form-control" id="precioBateria" placeholder="100000"
                                value={precioBateria} onChange={(e) => setprecioBateria(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="cantidadBaterias">Cantidad Baterías</label>
                            <input className="form-control" id="cantidadBaterias" placeholder="1"
                                value={cantidadBaterias} onChange={(e) => setcantidadBaterias(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="precioEstructura">Estruct./Cableado</label>
                            <input className="form-control" id="precioEstructura" placeholder="15000"
                                value={precioEstructura} onChange={(e) => setprecioEstructura(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="instalacionBase">Instalación base ($)</label>
                            <input className="form-control" id="instalacionBase" placeholder="350000"
                                value={instalacionBase} onChange={(e) => setinstalacionBase(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="pesoEnvio">Peso envío (kg)</label>
                            <input className="form-control" id="pesoEnvio" placeholder="20"
                                value={pesoEnvio} onChange={(e) => setpesoEnvio(e.target.value)} />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="tipoTecho">Tipo de techo</label>
                            <select className="form-select" id="tipoTecho"
                                value={tipoTecho} onChange={(e) => setTipoTecho(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="Teja">Teja/Asfalto (+5%)</option>
                                <option value="Plano">Plano (0%)</option>
                                <option value="Fibro">Fibrocemento (+3%)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="region">Región</label>
                            <select className="form-select" id="region"
                                value={region} onChange={(e) => setregion(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="RM">RM (+$5.000)</option>
                                <option value="V">V Región (+$7.000)</option>
                                <option value="VI">VI Región (+$9.000)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="complejidad">Complejidad</label>
                            <select className="form-select" id="complejidad"
                                value={complejidad} onChange={(e) => setcomplejidad(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="Baja">Baja (0%)</option>
                                <option value="Media">Media (+5%)</option>
                                <option value="Alta">Alta (+10%)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="subsidio">Subsidio</label>
                            <select className="form-select" id="subsidio"
                                value={subsidio} onChange={(e) => setsubsidio(e.target.value)}>
                                <option value="">Sin subsidio</option>
                                <option value="10%">10%</option>
                                <option value="20%">20%</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="metodoEnvio">Método de envío</label>
                            <select className="form-select" id="metodoEnvio"
                                value={metodoEnvio} onChange={(e) => setmetodoEnvio(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="Estandar">Estándar (x1.00)</option>
                                <option value="Rapido">Rápido (x1.10)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="garantia">Garantía</label>
                            <select className="form-select" id="garantia"
                                value={garantia} onChange={(e) => setgarantia(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="12 meses">12 meses (+2%)</option>
                                <option value="24 meses">24 meses (+4%)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="planPago">Plan de pago</label>
                            <select className="form-select" id="planPago"
                                value={planPago} onChange={(e) => setplanPago(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="Contado">Contado (0%)</option>
                                <option value="12 meses">12 meses (+12%)</option>
                                <option value="24 meses">24 meses (+24%)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="tipoPie">Tipo de pie</label>
                            <select className="form-select" id="tipoPie"
                                value={tipoPie} onChange={(e) => settipoPie(e.target.value)}>
                                <option value="">Seleccione…</option>
                                <option value="Porcentaje">Porcentaje</option>
                                <option value="Monto fijo">Monto fijo</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="valorPie">Valor de pie</label>
                            <input className="form-control" id="valorPie" placeholder="15000"
                                value={valorPie} onChange={(e) => setvalorPie(e.target.value)} />
                        </div>

                    </div>
                    <div className="col-12 mt-4 d-flex justify-content-start gap-3">
                        <Button variant="outline-dark" className="px-4 py-2" onClick={() => {
                            // Reiniciar todos los campos y estados
                            setPotenciaPanel(0);
                            setCantidadPaneles(0);
                            setprecioInversor(0);
                            setprecioBateria(0);
                            setcantidadBaterias(0);
                            setprecioEstructura(0);
                            setinstalacionBase(0);
                            setpesoEnvio(0);
                            setTipoTecho("");
                            setregion("");
                            setcomplejidad("");
                            setsubsidio("");
                            setmetodoEnvio("");
                            setgarantia("");
                            setplanPago("");
                            settipoPie("");
                            setvalorPie(0);
                        }
                        }> Reiniciar</Button>


                        <Button variant="outline-dark" className="px-4 py-2" onClick={() => {
                            const resumen = ` RESUMEN CALCULADORA SOLAR:
                                            Potencia estimada: ${potenciaEstimada.toFixed(2)} kW
                                            Subtotal equipos: $${CLP(subtotalEquipos)}
                                            Recargo techo: $${CLP(recargoTecho)}
                                            Subsidio aplicado: -$${CLP(subsidioAplicado)}
                                            Instalación final: $${CLP(instalacionFinal)}
                                            IVA (19%): $${CLP(iva)}
                                            Envío: $${CLP(envio)}
                                            Garantía: $${CLP(garantiaExtra)}
                                            Total antes de financiar: $${CLP(totalAntesFinanciar)}
                                            Pie: -$${CLP(pie)}
                                            Interés total: $${CLP(interesTotal)}
                                            ${meses ? `Cuota (${meses} meses): $${CLP(cuota)}` : ""}
                                            TOTAL FINAL: $${CLP(totalFinal)} `;

                            // Copiar al portapapeles
                            navigator.clipboard.writeText(resumen)
                                .then(() => alert(" Resumen copiado al portapapeles"))
                                .catch(() => alert("Error al copiar el resumen"));
                        }
                        }>Copiar resumen</Button>
                    </div>
                </div>



                <div className="col-lg-6">
                    <h3 className="my-3">Resumen</h3>
                    <Table striped bordered hover>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Potencia estimada (kW)</td>
                                <td>{potenciaEstimada.toFixed(2)}</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Subtotal equipos</td>
                                <td>${CLP(subtotalEquipos)}</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Recargo techo</td>
                                <td>${CLP(recargoTecho)}</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Subsidio</td>
                                <td>${CLP(subsidioAplicado)}</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Instalación final</td>
                                <td>${CLP(instalacionFinal)}</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>IVA 19%</td>
                                <td>${CLP(iva)}</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Envío</td>
                                <td>${CLP(envio)}</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Garantía</td>
                                <td>${CLP(garantiaExtra)}</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>Total antes de financiar</td>
                                <td>${CLP(totalAntesFinanciar)}</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>Pie</td>
                                <td>${CLP(pie)}</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>Interés total</td>
                                <td>${CLP(interesTotal)}</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>Cuota {meses ? `(${meses} meses)` : ""}</td>
                                <td>{meses ? `$${CLP(cuota)}` : "—"}</td>
                            </tr>

                            <tr className="fw-bold">
                                <td>14</td>
                                <td >Total final</td>
                                <td>${CLP(totalFinal)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default CalculadoraIntegral;
