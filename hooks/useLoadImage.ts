import { Song } from "@/types";


import { useSupabaseClient } from "@supabase/auth-helpers-react";


const useLoadImage = (song: Song) => {
    const subpabaseClient = useSupabaseClient();

    if(!song){
        return null;
    }

    const { data: imageData } = subpabaseClient
    .storage
    .from('images')
    .getPublicUrl(song.image_path)

    return imageData.publicUrl;
};

export default useLoadImage;