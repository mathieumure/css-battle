const content = await import(/* @vite-ignore */ `../${import.meta.env.VITE_TARGET}.html?raw`);

document.querySelectorAll('.body').forEach( it => it.innerHTML = content.default);
