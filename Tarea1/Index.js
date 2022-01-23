const { conectarMongo } = require('./BaseDeDatos')
const trigger_mantenimientos = require('./Trigger/trigger')

// Datos de la inserción del DetalleVenta
const mantenimiento = {
  mantenimiento_id: 1,
  mantenimiento_fecha_r: '18/01/2022',
  mantenimiento_tecnico: 'Alexander Solorzano',
  mantenimiento_fecha_e: '25/01/2022',
  mantenimiento_detalle:'Cambio de batería',
  mantenimiento_costo: 60,
  mantenimiento_incomp_tecnico: 5
}
// Insertar
const insertar = async () => {

  await conectarMongo()
  // Trigger
  trigger_mantenimientos(mantenimiento)

}

insertar()