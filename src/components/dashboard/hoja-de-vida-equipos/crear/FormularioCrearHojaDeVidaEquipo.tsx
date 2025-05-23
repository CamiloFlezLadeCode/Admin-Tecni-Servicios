'use client'; // Esto dice que este archivo se renderiza en el lado del cliente

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar'; // Alertas Flotantes
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
// import InputText from './InputText'; //Así se importa un componente cuando se exporta con => export default InputText;
import Input from '../../componentes_generales/formulario/Input';
import InputSelect from '../../componentes_generales/formulario/Select';

import { SelectChangeEvent } from '@mui/material/Select'; // Asegúrate de tener esta importación
import Typography from '@mui/material/Typography';
import { Info } from '@phosphor-icons/react/dist/ssr';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const EstadoCliente = [
    { value: '1', label: 'Activo' },
    { value: '2', label: 'Inactivo' },
]

const Empresas = [
    { value: '1', label: 'Empresa/Cliente #1' },
    { value: '2', label: 'Empresa/Cliente #2' },
    { value: '3', label: 'Cinnamom Overdressed Ceere Software SAS' },
]

interface DatosTipo {
    ValorFecha: Date;
    ValorEmpresa: string;
    ValorNit: string;
    ValorTelefono: number;
    ValorDireccion: string;
    ValorNombreEquipo: string;
    ValorCodigo: string;
    ValorSeleccion: string;
    ValorModelo: string;
    ValorSerie: string;
    ValorObra: string;
    ValorFabricante: string;
    ValorMarca: string;
    ValorVoltaje: string;
    ValorTipoControl: string;
    ValorAgua: string;
    ValorConsumo: string;
    ValorTipoOperacion: string;
    ValorAire: string;
    ValorPotencia: string;
    ValorCombustible: string;
    ValorRepuestos: string;
    ValorObservaciones: string;
    ValorResponsable: string;
}

export function FormularioCrearHojaDeVidaEquipo(): React.JSX.Element {

    //Fecha
    const [Fecha, setFecha] = React.useState('');
    const handleChangeFecha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFecha(event.target.value);
    };

    //Empresa
    const [Empresa, setEmpresa] = React.useState<string>('');
    const handleChangeEmpresa = (event: SelectChangeEvent<string>) => {
        const newValue = event.target.value;
        setEmpresa(newValue);

        if (newValue === '1') {
            setNit('EMPRESA 1');
        } else {
            setNit('');
        }

        switch (newValue) {
            case '1':
                setNit('EMPRESA #1');
                break;

            case '2':
                setNit('EMPRESAS #2');
                break;

            default:
                setNit('NADA')
                break;
        }
    };

    //Nit
    const [Nit, setNit] = React.useState('');
    const handleChangeNit = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNit(event.target.value);
    };

    //Teléfono
    const [Telefono, setTelefono] = React.useState('');
    const handleChangeTelefono = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelefono(event.target.value);
    };

    //Dirección
    const [Direccion, setDireccion] = React.useState('');
    const handleChangeDireccion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDireccion(event.target.value);
    };

    //Nombre del equipo
    const [NombreEquipo, setNombreEquipo] = React.useState('');
    const handleChangeNombreEquipo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombreEquipo(event.target.value);
    };

    //Código
    const [Codigo, setCodigo] = React.useState('');
    const handleChangeCodigo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCodigo(event.target.value);
    };

    //Selección
    const [Seleccion, setSeleccion] = React.useState('');
    const handleChangeSeleccion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeleccion(event.target.value);
    };

    //Modelo
    const [Modelo, setModelo] = React.useState('');
    const handleChangeModelo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModelo(event.target.value);
    };

    //Serie
    const [Serie, setSerie] = React.useState('');
    const handleChangeSerie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSerie(event.target.value);
    };

    //Obra
    const [Obra, setObra] = React.useState('');
    const handleChangeObra = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObra(event.target.value);
    };

    //Fabricante
    const [Fabricante, setFabricante] = React.useState('');
    const handleChangeFabricante = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFabricante(event.target.value);
    };

    //Marca
    const [Marca, setMarca] = React.useState('');
    const handleChangeMarca = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarca(event.target.value);
    };

    //Voltaje
    const [Voltaje, setVoltaje] = React.useState('');
    const handleChangeVoltaje = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVoltaje(event.target.value);
    };

    //Tipo de control
    const [TipoControl, setTipoControl] = React.useState('');
    const handleChangeTipoControl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoControl(event.target.value);
    };

    //Agua
    const [Agua, setAgua] = React.useState('');
    const handleChangeAgua = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgua(event.target.value);
    };

    //Consumo
    const [Consumo, setConsumo] = React.useState('');
    const handleChangeConsumo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConsumo(event.target.value);
    };

    //Tipo de operación
    const [TipoOperacion, setTipoOperacion] = React.useState('');
    const handleChangeTipoOperacion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoOperacion(event.target.value);
    };

    //Aire
    const [Aire, setAire] = React.useState('');
    const handleChangeAire = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAire(event.target.value);
    };

    //Potencia
    const [Potencia, setPotencia] = React.useState('');
    const handleChangePotencia = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPotencia(event.target.value);
    };

    //Combustible
    const [Combustible, setCombustible] = React.useState('');
    const handleChangeCombustible = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCombustible(event.target.value);
    };

    //Descripción de la actividad
    const [DescripcionActividad, setDescripcionActividad] = React.useState('');
    const handleChangeDescripcionActividad = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescripcionActividad(event.target.value);
    };

    //Repuestos
    const [Repuestos, setRepuestos] = React.useState('');
    const handleChangeRepuestos = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepuestos(event.target.value);
    };

    //Observaciones
    const [Observaciones, setObservaciones] = React.useState('');
    const handleChangeObservaciones = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObservaciones(event.target.value);
    };

    //Responsable
    const [Responsable, setResponsable] = React.useState('');
    const handleChangeResponsable = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponsable(event.target.value);
    };

    let Consecutivo = 1;

    // Mostrar alerta
    const [mostrarAlerta, setMostrarAlerta] = React.useState<boolean>(false);
    const [cargando, setCargando] = React.useState<boolean>(false);
    const [camposFaltantes, setCamposFaltantes] = React.useState<string[]>([]);
    const [MostrarAlertaSuccess, setMostrarAlertaSuccess] = React.useState<boolean>(false);

    const handleCrearCliente = async () => {
        // setMostrarAlerta(true);
        setCargando(true);

        // Ocultar después de 3 segundos
        // setTimeout(() => {
        //     setMostrarAlerta(false);
        // }, 5000);

        const Datos: DatosTipo = {
            ValorFecha: new Date(Fecha),
            ValorEmpresa: Empresa,
            ValorNit: Nit,
            ValorTelefono: parseInt(Telefono, 10),
            ValorDireccion: Direccion,
            ValorNombreEquipo: NombreEquipo,
            ValorCodigo: Codigo,
            ValorSeleccion: Seleccion,
            ValorModelo: Modelo,
            ValorSerie: Serie,
            ValorObra: Obra,
            ValorFabricante: Fabricante,
            ValorMarca: Marca,
            ValorVoltaje: Voltaje,
            ValorTipoControl: TipoControl,
            ValorAgua: Agua,
            ValorConsumo: Consumo,
            ValorTipoOperacion: TipoOperacion,
            ValorAire: Aire,
            ValorPotencia: Potencia,
            ValorCombustible: Combustible,
            ValorRepuestos: Repuestos,
            ValorObservaciones: Observaciones,
            ValorResponsable: Responsable
        };

        console.log(Datos);

        const camposFaltantes = []; // Array para almacenar mensajes de campos faltantes
        try {
            // Verificar si la fecha es válida
            if (isNaN(Datos.ValorFecha.getTime())) {
                camposFaltantes.push('La fecha es obligatoria');
            }

            // Verificar otros campos
            if (!Datos.ValorEmpresa) {
                camposFaltantes.push('La empresa es obligatoria');
            }
            if (!Datos.ValorNit) {
                camposFaltantes.push('El NIT es obligatorio');
            }
            // if (!Datos.ValorTelefono) {
            //     camposFaltantes.push('El teléfono es obligatorio');
            // }
            if (isNaN(Datos.ValorTelefono) || Datos.ValorTelefono <= 0) {
                camposFaltantes.push('El teléfono es obligatorio y debe ser un número válido');
            }


            // Si hay campos faltantes, mostrar alerta
            if (camposFaltantes.length > 0) {
                setMostrarAlerta(true);
                setCamposFaltantes(camposFaltantes); // Actualiza el estado con los mensajes
            } else {
                setCamposFaltantes([]);
                setMostrarAlerta(false);
                setMostrarAlertaSuccess(true);



                //Se reinician los campos para dar la posibilidad de crear una nueva hoja de vida a un equipo
                setFecha('');
                setEmpresa('');
                setNit('');
                setTelefono('');
                setDireccion('');
                setNombreEquipo('');
                setCodigo('');
                setSeleccion('');
                setModelo('');
                setSerie('');
                setObra('');
                setFabricante('');
                setMarca('');
                setVoltaje('');
                setTipoControl('');
                setAgua('');
                setConsumo('');
                setTipoOperacion('');
                setAire('');
                setPotencia('');
                setCombustible('');
                setDescripcionActividad('');
                setRepuestos('');
                setObservaciones('');
                setResponsable('');
            }
        } catch (error) {
            console.log(error)
        }
    };

    // const handleClose = () => {
    //     setMostrarAlerta(false);
    // };

    //Evita que la alerta se cierre cuando se hace clic fuera de ella
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        // Evitar que se cierre al hacer clic fuera
        if (reason === 'clickaway') {
            return;
        }
        setMostrarAlerta(false);
    };

    //BUENO
    return (
        <div>
            <Card>
                {/* <CardHeader
                    title="Creación de hoja de vida de equipo" size="small"
                    sx={{
                        fontSize: '0.875rem', // Tamaño de fuente más pequeño
                        padding: '8px', // Espaciado interno más pequeño
                    }}
                /> */}
                <Typography variant='subtitle1' style={{ color: '#000000', padding: '5px', fontWeight: 'normal' }}>Creación de hoja de vida de equipo</Typography>
                <Divider />
                <CardContent style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <Grid container spacing={1}>
                        <Grid md={8} xs={12}>
                            <span>MANTENIMIENTO PREVENTIVO</span>
                        </Grid>

                        {/* <Grid md={2} xs={12} mt={0.5}>
                            <span>Consecutivo: [{Consecutivo}] </span>
                        </Grid> */}
                        <Grid md={4} xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                            <Info style={{ marginRight: '8px', color: '#1976d2', width: '26px', height: '26px' }} />
                            <Typography variant="body1" style={{ fontWeight: 'normal' }}>
                                Consecutivo: {Consecutivo}
                            </Typography>
                        </Grid>

                        {/* <Grid md={12} xs={12} mt={0.5}>
                            <Input
                                label='Guía 12 col'
                                value=''
                                // onChange={}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid> */}


                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label="Fecha"
                                value={Fecha}
                                onChange={handleChangeFecha}
                                // required
                                tamano="small"
                                tipo_input="date"
                            />
                        </Grid>

                        <Grid md={3} xs={12} mt={0.5}>
                            <InputSelect
                                label='Empresa'
                                value={Empresa}
                                options={Empresas}
                                size='small'
                                onChange={handleChangeEmpresa}
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Nit'
                                value={Nit}
                                onChange={handleChangeNit}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Teléfono'
                                value={Telefono}
                                onChange={handleChangeTelefono}
                                // required
                                tamano='small'
                                tipo_input='number'
                            />
                        </Grid>

                        <Grid md={3} xs={12} mt={0.5}>
                            <Input
                                label='Dirección'
                                value={Direccion}
                                onChange={handleChangeDireccion}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={12} xs={12} mt={0.7}>
                            <span>HOJA DE VIDA EQUIPO</span>
                        </Grid>

                        <Grid md={4} xs={12} mt={0.5}>
                            <Input
                                label='Nombre del equipo'
                                value={NombreEquipo}
                                onChange={handleChangeNombreEquipo}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Código'
                                value={Codigo}
                                onChange={handleChangeCodigo}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Selección'
                                value={Seleccion}
                                onChange={handleChangeSeleccion}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Modelo'
                                value={Modelo}
                                onChange={handleChangeModelo}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Serie'
                                value={Serie}
                                onChange={handleChangeSerie}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={3} xs={12} mt={0.5}>
                            <Input
                                label='Obra'
                                value={Obra}
                                onChange={handleChangeObra}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={3} xs={12} mt={0.5}>
                            <Input
                                label='Fabricante'
                                value={Fabricante}
                                onChange={handleChangeFabricante}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Marca'
                                value={Marca}
                                onChange={handleChangeMarca}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={12} xs={12} mt={0.7}>
                            <span>CARACTERISTICAS TECNICAS</span>
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Voltaje'
                                value={Voltaje}
                                onChange={handleChangeVoltaje}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Tipo de control'
                                value={TipoControl}
                                onChange={handleChangeTipoControl}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Agua'
                                value={Agua}
                                onChange={handleChangeAgua}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Consumo'
                                value={Consumo}
                                onChange={handleChangeConsumo}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Tipo de operación'
                                value={TipoOperacion}
                                onChange={handleChangeTipoOperacion}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Aire'
                                value={Aire}
                                onChange={handleChangeAire}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={3} xs={12} mt={0.5}>
                            <Input
                                label='Potencia'
                                value={Potencia}
                                onChange={handleChangePotencia}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={2} xs={12} mt={0.5}>
                            <Input
                                label='Combustible'
                                value={Combustible}
                                onChange={handleChangeCombustible}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid md={12} xs={12} mt={0.7}>
                            <span>INTERVENSIONES REALIZADAS AL EQUIPO</span>
                        </Grid>

                        <Grid md={4} xs={12} mt={0.5}>
                            <Input
                                label='Descripción de la actividad'
                                value={DescripcionActividad}
                                onChange={handleChangeDescripcionActividad}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        <Grid container spacing={1} md={12} xs={12}>
                            <Grid md={6} xs={12} mt={0.5}>
                                <Input
                                    label='Repuestos'
                                    value={Repuestos}
                                    onChange={handleChangeRepuestos}
                                    // required
                                    tamano='small'
                                    tipo_input='textarea'
                                />
                            </Grid>
                            <Grid md={6} xs={12} mt={0.5} >
                                <Input
                                    label='Observaciones'
                                    value={Observaciones}
                                    onChange={handleChangeObservaciones}
                                    // required
                                    tamano='small'
                                    tipo_input='textarea'
                                />
                            </Grid>
                        </Grid>

                        <Grid md={4} xs={12} mt={0.5}>
                            <Input
                                label='Responsable'
                                value={Responsable}
                                onChange={handleChangeResponsable}
                                // required
                                tamano='small'
                                tipo_input='text'
                            />
                        </Grid>

                        {/* BASES PARA INPUTS FECHA, INPUT, SELECT */}
                        {/* <Grid md={3} xs={12} mt={0.5}>
                            <InputText
                                label="Nombre"
                                value={nombre}
                                onChange={handleChangeNombre}
                                required
                                tamano="small"
                                tipo_input="input"
                            />
                        </Grid>                       
                        <Grid md={3} xs={12} mt={1}>
                            <FormControl fullWidth>
                                <InputLabel>Estado</InputLabel>
                                <Select defaultValue="Activo" label="Estado" name="state" variant="outlined" size="small">
                                    {EstadoCliente.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid md={3} xs={12} mt={1}>
                            <FormControl fullWidth required>
                                <InputLabel shrink htmlFor="fecha">
                                    Fecha
                                </InputLabel>
                                <OutlinedInput
                                    id="fecha"
                                    type="date"
                                    name="fecha"
                                    notched
                                    label="Fecha"
                                    size="small"
                                />
                            </FormControl>
                        </Grid> */}
                    </Grid>
                    {/* {mostrarAlerta && (
                    <Alert severity="success" sx={{ mt: 1 }}>
                        Este es un mensaje de error!
                    </Alert>
                )} */}
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" onClick={handleCrearCliente}>
                        Crear hoja de vida
                    </Button>
                </CardActions>

                {/* Snackbar con alerta */}
                <Snackbar
                    open={MostrarAlertaSuccess}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    autoHideDuration={5000}
                    onClose={() => setMostrarAlertaSuccess(false)}
                >
                    <Alert severity="success" sx={{ width: '100%', color: '#000000' }} onClose={() => setMostrarAlertaSuccess(false)}>
                        Hoja de vida creada exitosamente
                    </Alert>
                </Snackbar>

                {/* Snackbar con alerta */}
                {/* <Snackbar
                    open={mostrarAlerta}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    // autoHideDuration={5000}
                    onClose={handleClose}
                >
                    <Alert severity="warning" onClose={handleClose} sx={{ width: '100%' }}>
                        {camposFaltantes.length > 0 ? camposFaltantes.join(', ') : 'Hay campos obligatorios.'}
                    </Alert>
                </Snackbar> */}


                {/* Snackbar con alerta */}
                <Snackbar
                    open={mostrarAlerta}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={handleClose}
                // autoHideDuration={null} // No se cierra automáticamente
                >
                    <Alert
                        severity="warning"
                        onClose={handleClose}
                        sx={{ width: '100%' }}
                    >
                        <div>
                            {camposFaltantes.length > 0 ? (
                                <ul>
                                    {camposFaltantes.map((campo, index) => (
                                        <li key={campo}>{campo}</li>
                                    ))}
                                </ul>
                            ) : null

                                // : (
                                //      <span>Hay campos obligatorios.</span>
                                // )
                            }
                        </div>
                    </Alert>
                </Snackbar>
            </Card>
        </div>
    );


}