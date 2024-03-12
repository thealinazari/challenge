class LayoutUtil {
  public static isAsideExpanded() {
    return document
      .getElementById('aside')
      ?.classList.contains('app-aside--expanded');
  }

  public static SidebarExpand(): void {
    const aside = document.getElementById('aside');

    if (!aside) return;

    if (LayoutUtil.isAsideExpanded()) {
      aside.classList.remove('app-aside--expanded');
      aside.classList.add('app-aside');
      console.log(aside.classList);
    } else {
      aside.classList.remove('app-aside');
      aside.classList.add('app-aside--expanded');
    }
  }
}

export default LayoutUtil;
