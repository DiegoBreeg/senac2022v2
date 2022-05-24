import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pages_controller = 

{
    home(req, res) {        
        return res.status(200).sendFile(path.resolve(__dirname, "../", "view/public/home/home.html"))
    },

    form(req, res) {        
        return res.status(200).sendFile(path.resolve(__dirname, "../", "view/public/form/form.html"))
    }

}

export { pages_controller }