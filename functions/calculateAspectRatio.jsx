export default function calculateAspectRatio(images) {
    // Create an object to store images grouped by aspect ratio
    const imagesByAspectRatio = {};

    images.forEach((image) => {
        const [width, height] = image.dimensions.split(" x ").map((dim) => parseInt(dim));
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const commonDivisor = gcd(width, height);
        const aspectWidth = width / commonDivisor;
        const aspectHeight = height / commonDivisor;
        const aspectRatio = `${aspectWidth}/${aspectHeight}`;

        if (!imagesByAspectRatio[aspectRatio]) {
            imagesByAspectRatio[aspectRatio] = [];
        }

        imagesByAspectRatio[aspectRatio].push(image);
    });

    // Sort images within each aspect ratio group
    for (const aspectRatio in imagesByAspectRatio) {
        imagesByAspectRatio[aspectRatio].sort((a, b) => {
            // Compare images within the same aspect ratio group
            // You can use any criteria for sorting here
            // For example, you can sort by image name (a.name.localeCompare(b.name))
            // or any other property you want
            return a.titel_Bild.localeCompare(b.titel_Bild);
        });
    }

    return imagesByAspectRatio;
}
