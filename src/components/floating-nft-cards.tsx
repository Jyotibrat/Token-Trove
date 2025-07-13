'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const Node = ({
  position,
  delay,
  size = 30,
}: {
  position: [number, number];
  delay: number;
  size?: number;
}) => {
  const halfSize = size / 2;

  const gemFaces = [
    { transform: `rotateY(0deg) translateZ(${halfSize}px)`, className: 'from-primary/70 to-purple-500/70' },
    { transform: `rotateY(180deg) translateZ(${halfSize}px)`, className: 'from-pink-500/70 to-primary/70' },
    { transform: `rotateY(-90deg) translateZ(${halfSize}px)`, className: 'from-purple-500/70 to-pink-500/70' },
    { transform: `rotateY(90deg) translateZ(${halfSize}px)`, className: 'from-pink-500/70 to-primary/70' },
    { transform: `rotateX(90deg) translateZ(${halfSize}px)`, className: 'from-primary/70 to-purple-500/70' },
    { transform: `rotateX(-90deg) translateZ(${halfSize}px)`, className: 'from-purple-500/70 to-pink-500/70' },
  ];

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${position[0]}%`,
        top: `${position[1]}%`,
        transformStyle: 'preserve-3d',
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
    >
      <motion.div
        className="relative"
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          transformStyle: 'preserve-3d' 
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          ease: 'linear',
          delay: delay * 0.5,
        }}
      >
        {gemFaces.map((face, i) => (
          <motion.div
            key={i}
            className={cn(
              'absolute border border-primary/20 bg-gradient-to-br opacity-50',
              face.className
            )}
            style={{
              transform: face.transform,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const NUMBER_OF_NODES = 15;
const CENTRAL_NODE_POSITION: [number, number] = [50, 45];
const CENTRAL_NODE_SIZE = 80;
const MIN_DISTANCE_FROM_CENTER = 20;

type NodeInfo = {
  position: [number, number];
  size: number;
};

export function FloatingNftCards() {
  const [nodes, setNodes] = useState<NodeInfo[]>([]);

  useEffect(() => {
    const generateRandomNodes = () => {
      const newNodes: NodeInfo[] = [];
      while (newNodes.length < NUMBER_OF_NODES) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const distance = Math.sqrt(
          Math.pow(x - CENTRAL_NODE_POSITION[0], 2) + Math.pow(y - CENTRAL_NODE_POSITION[1], 2)
        );

        if (distance > MIN_DISTANCE_FROM_CENTER) {
          const size = Math.random() * 25 + 15; // Random size between 15 and 40
          newNodes.push({ position: [x, y], size });
        }
      }
      setNodes(newNodes);
    };
    generateRandomNodes();
  }, []);

  return (
    <motion.div
      className="absolute inset-0 -z-0"
      style={{ perspective: '1000px' }}
    >
      <Node 
        key="central-node" 
        position={CENTRAL_NODE_POSITION} 
        delay={0}
        size={CENTRAL_NODE_SIZE}
      />
      {nodes.map((node, index) => (
        <Node key={index} position={node.position} delay={index + 1} size={node.size} />
      ))}
    </motion.div>
  );
}
