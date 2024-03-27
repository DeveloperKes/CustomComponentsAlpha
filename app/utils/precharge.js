import './oulet.complement.js';


(async () => {
    const components = await fetchFiles('components');
    console.log(components);
    for (const component of components) {
        if (component) {
            const path = `/app/${component}/${component.split('/').pop()}.controller.js`;
            await import(path).then((res) => {
                const Component = res.default;
                const componentName = extractName(component);
                customElements.define(`fnn-${componentName}`, Component);
            }).catch((err) => {
                console.error(err);
            });

        }
    }
    const modules = await fetchFiles('modules');
    for (const module of modules) {
        const path = `/app/${module}/${module.split('/').pop()}.controller.js`;
        await import(path).then((res) => {
            const Module = res.default;
            const ModuleName = extractName(module);
            customElements.define(`fnn-${ModuleName}`, Module);
        }).catch((err) => {
            console.error(err);
        });
    }
})();

async function fetchFiles(folder) {
    const response = await fetch(`app/${folder}`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return Array.from(doc.querySelectorAll(`a[href*="app/${folder}/"]`)).map(a => a.getAttribute('href').slice(5));
}

function extractName(file) {
    return file.split('/').pop().replace('.controller.js', '');
}

//Enrutador

(async () => {
    const hash = window.location.hash.substring(1);
    console.log(hash);
})()