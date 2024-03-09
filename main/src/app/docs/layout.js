import RightDocsNavbar from "./RightDocsNavbar/RightDocsNavbar.js";
import docsStyle from "./docsLayout.module.css";

export default function DocsLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className={docsStyle.divDocsLayout}>
     
          <RightDocsNavbar />
      
      <div className={docsStyle.docsChildren}>{children}</div>
    </div>
  );
}
