exports.deleteOne = Model => async (req,res,next) => {
    try {
        const doc = Model.findByIdAndDelete(req.params.id);
         if(!doc) {
            throw new Error('no document found');
        }
        return res.send(204).json({
            success: true,
            data: null
        })
    }catch(err) {
        next(err);
    }
}

exports.updateOne = Model => async (req,res,next) => {
    try {
        const doc = Model.findOneAndUpdate({_id: req.params.id}, {
            $set: {
                ...req.body
            }
        })
        if(!doc) {
            throw new Error('No such document found!');
        }
        return res.status(200).send({
            success: true,
            doc: doc
        })
    }catch(err) {
        next(err);
    }
}

exports.createOne = Model => async (req,res,next) => {
    try {
        const doc = Model.create({
            ...req.body
        });
        if(!doc) {
            throw new Error('Some Error Occurred');
        }
        return res.status(200).send({
            success: true,
            doc
        })
    }catch(err) {
        next(err);
    }
}