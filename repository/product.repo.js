import supabase from "../supabaseClient.js";

export default {
    async productList() {
        const { data, error } = await supabase
            .from('product')
            .select('*')
        return { data, error };
    },
    async addProduct(product) {
        const { data, error } = await supabase
            .from('product')
            .insert(product)
            .select()
        return { data, error };
    },
    async updateProduct(product) {
        const { data, error } = await supabase
            .from('product')
            .update(product)
            .eq('id', product.id)
            .select()
        return { data, error };
    },
    async deleteProduct(id) {
        const { error } = await supabase
            .from('product')
            .delete()
            .eq('id', id)
        return error;
    },
}