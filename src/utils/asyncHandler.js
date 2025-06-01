// Async function wrapper using try cache and async and await
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

// Async function wrapper using Promises
// const asyncHandler = (fn)=>{
//     return async (req,res,next)=>{
//         Promise.resolve(fn(req,res,next)).catch(next);
//     }
// }

export { asyncHandler };
