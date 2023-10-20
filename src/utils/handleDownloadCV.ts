export function handleDownloadCV() {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1oj3D7VXG8AjF-n-ucvj91UHEkCVgdjgK/view?usp=sharing";
  link.download = "CV.pdf";
  link.click();
}
