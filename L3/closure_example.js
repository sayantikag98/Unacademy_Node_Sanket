const func = () => {
    const a = 10;
    return (() => {
        console.log(a);
    });
};

(func())();