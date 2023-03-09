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