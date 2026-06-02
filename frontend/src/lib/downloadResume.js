/**
 * Downloads the actual Anu Gupta CV/Resume PDF file.
 */
export function downloadResumePdf() {
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = '/resume/Anu_Gupta_CV.pdf';
  link.download = 'Anu_Gupta_CV.pdf';
  link.style.display = 'none';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
