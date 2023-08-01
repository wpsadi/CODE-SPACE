let module_variable = 12

function module_Function(){
    console.log("hello from module 1")
}

// export {module_Function, module_variable}

module.exports = {module_Function, module_variable}