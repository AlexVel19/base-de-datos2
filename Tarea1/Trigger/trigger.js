const { Mantenimiento} = require('../Esquematización');
let max_incomp = 3;

module.exports = trigger_mantenimientos = (mantenimiento) => {
  const {mantenimiento_incomp_tecnico} = mantenimiento;
    try {
          if(mantenimiento_incomp_tecnico > max_incomp){
            throw 'Este técnico no ha completado 3 mantenimiento, no se le puede asignar más'
          } else {
  
            const insertar = new Mantenimiento(mantenimiento)
            insertar.save()
  
            console.log('Se insertó el registro correctamente')
            console.log(mantenimiento)
          }
    } catch (e) {
      console.log(e)
    }
}