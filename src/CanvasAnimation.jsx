import React, { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let mouseMoved = false;

    const pointer = {
      x: .5 * window.innerWidth,
      y: .5 * window.innerHeight,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: .3,
      mouseThreshold: .6,
      spring: .4,
      friction: .5
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      }
    }

    const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const setupCanvas = () => {
      canvas.width = window.innerWidth-20;
      canvas.height = window.innerHeight+3200;
      canvas.color = "#0000";
    };

    const update = (t) => {
      if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      ctx.strokeStyle = "aqua"

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      window.requestAnimationFrame(update);
    };

    const handleMousemove = (e) => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    };

    const handleTouchmove = (e) => {
      mouseMoved = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    };
    function setHeightOfPages() {
      const pages = document.querySelectorAll('section');
      pages.forEach(page => {
        page.style.height = window.innerHeight + 'px';
      });
    }

    window.addEventListener("mousemove", handleMousemove);
    window.addEventListener("touchmove", handleTouchmove);
    window.addEventListener('resize', () => {
      setHeightOfPages();
    });
    setupCanvas();
    update(0);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
      window.removeEventListener("touchmove", handleTouchmove);
      document.addEventListener('DOMContentLoaded', () => {
        setHeightOfPages();
      });
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' , overflow:'hidden'}} />;
};

export default CanvasAnimation;
