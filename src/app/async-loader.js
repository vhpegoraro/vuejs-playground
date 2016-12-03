export default class AsyncLoader {

    static load(component, group) {

            return resolve => {
                require.ensure([component], () => {
                    resolve(require(component))
            }, group);
        }
    }
}