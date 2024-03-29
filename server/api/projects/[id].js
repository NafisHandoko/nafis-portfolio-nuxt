import data from "./data"

export default defineEventHandler(async (event) => {
    const {id} = event.context.params

    return data[id]
})