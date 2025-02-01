export const handlerButton = async () =>{
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Выполнено!');
        },  3000);
    });
}