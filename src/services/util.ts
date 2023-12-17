export async function getImage(imageName: string) {
    //TODO catch error to show image placeholder
    return await import(`../../public/${imageName}`);
}