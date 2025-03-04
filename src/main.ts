import "./styles/tailwind.css";
import "./styles/main.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

// 初始化 Alpine.js
Alpine.start();

// Word 主题特定功能
document.addEventListener('DOMContentLoaded', function() {
  // 处理目录点击事件
  const tocItems = document.querySelectorAll('.toc-item a');
  tocItems.forEach(item => {
    item.addEventListener('click', function() {
      // 可以添加点击动画或其他效果
      console.log('Clicked on TOC item:', (item as HTMLElement).textContent);
    });
  });

  // 处理页面滚动，固定导航栏
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }

  // 响应式处理
  function handleResponsive() {
    const a4Paper = document.querySelector('.a4-paper');
    if (a4Paper && window.innerWidth < 768) {
      // 移动端适配
      a4Paper.classList.add('w-full');
    } else if (a4Paper) {
      a4Paper.classList.remove('w-full');
    }
  }

  // 初始调用一次
  handleResponsive();
  
  // 窗口大小变化时调用
  window.addEventListener('resize', handleResponsive);
});

export function count(x: number, y: number) {
  return x + y;
}
