// all these functions will take model as input as will return a function

const getAll = model => async(req, res) => {
    try{
        const documents = await model.find();
        res.status(200).json({data: documents});
    }
    catch(err){
        console.error(err.message);
        res.status(400).end();
    }
    
};

const getById = model => async(req, res) => {
    try{
        const id = req.params.id;
        const document = await model.findById(id);
        if(!document){
            return res.send(404).end();
        }
        res.status(200).json({data: document});
    }
    catch(err){
        console.error(err.message);
        res.status(400).end();
    }
};

const postNew = model => async(req, res) => {
    try{
        console.log(req.body);
        const document = await model.create(req.body);
        res.status(201).json({data: document});
    }
    catch(err){
        console.error(err.message);
        res.status(400).end();
    }
};

const updateById = model => async(req, res) => {
    try{
        const id = req.params.id;
        const document = await model.findByIdAndUpdate(id, req.body, {new: true}); // returns the updated document
        if(!document){
            return res.send(404).end();
        }
        res.status(200).json({data: document});
    }
    catch(err){
        console.error(err.message);
        res.status(400).end();
    }
};

const deleteById = model => async(req, res) => {
    try{
        const id = req.params.id;
        const document = await model.findByIdAndRemove(id);
        if(!document){
            return res.send(404).end();
        }
        res.status(200).json({data: document});
    }
    catch(err){
        console.error(err.message);
        res.status(400).end();
    }
};

const crudController = (model) => ({
    getAll: getAll(model),
    getById: getById(model),
    postNew: postNew(model),
    updateById: updateById(model),
    deleteById: deleteById(model)    
});

export default crudController;
