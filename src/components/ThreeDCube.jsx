import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDCube() {
  const cubeRef = useRef(null);
  const sceneRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!cubeRef.current) return;
    
    while (cubeRef.current.firstChild) {
      cubeRef.current.removeChild(cubeRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    cubeRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      wireframe: false
    });
    const cube = new THREE.Mesh(geometry, material);
    
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges, 
      new THREE.LineBasicMaterial({ color: 0x3b82f6, linewidth: 2 })
    );
    
    cube.add(line);
    scene.add(cube);
    
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });
    
    const corners = [
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
      [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]
    ];
    
    corners.forEach(([x, y, z]) => {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, y, z);
      cube.add(sphere);
    });

    camera.position.z = 5;
    sceneRef.current = { scene, camera, renderer, cube };

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      edges.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
      scene.clear();
      if (cubeRef.current && renderer.domElement && cubeRef.current.contains(renderer.domElement)) {
        cubeRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      const { cube } = sceneRef.current;
      const rotationX = (mousePosition.y / window.innerHeight - 0.5) * 0.5;
      const rotationY = (mousePosition.x / window.innerWidth - 0.5) * 0.5;
      cube.rotation.x += (rotationX - cube.rotation.x) * 0.1;
      cube.rotation.y += (rotationY - cube.rotation.y) * 0.1;
    }
  }, [mousePosition]);

  return (
    <div 
      ref={cubeRef} 
      className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] cursor-pointer"
      style={{ perspective: '1000px' }}
    />
  );
}