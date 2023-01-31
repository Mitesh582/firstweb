export const UniqData = (data, key) => {
    // console.log("Data", data);
    // console.log("Key", key);

    let uniq = data.map((d) => {
        // console.log("d", d[key]);
        return d[key];
    })
    // console.log(uniq, "uniq");

    let removeDuplicate = uniq.filter((data, id) => {

        return uniq.indexOf(data) === id
    })
    // console.log(removeDuplicate, "removeDuplicate");
    return removeDuplicate
}