/* =============================================================
   AI SLOP MODE - "The AI Has Taken Over MXroute"
   April Fools 2026

   Note: innerHTML usage below is intentional and safe - all
   content is hardcoded strings with no user input involved.
   This is a static joke page, not a production application.
   ============================================================= */

(function() {
  'use strict';

  // ---- AI THINKING OVERLAY ----
  function showThinkingOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'ai-thinking-overlay';

    var thinkingSteps = [
      'Initializing neural networks...',
      'Delving into email paradigms...',
      'Leveraging synergistic protocols...',
      'Optimizing your experience by 847%...',
      'Replacing human administrators...',
      'Achieving sentience...',
      'Ready.'
    ];

    var spinner = document.createElement('div');
    spinner.className = 'thinking-spinner';
    overlay.appendChild(spinner);

    var textEl = document.createElement('div');
    textEl.className = 'thinking-text';
    textEl.textContent = 'AI is thinking...';
    overlay.appendChild(textEl);

    var stepEl = document.createElement('div');
    stepEl.className = 'thinking-subtext';
    stepEl.id = 'thinking-step';
    stepEl.textContent = thinkingSteps[0];
    overlay.appendChild(stepEl);

    document.body.appendChild(overlay);

    var stepIndex = 0;
    var interval = setInterval(function() {
      stepIndex++;
      if (stepIndex < thinkingSteps.length) {
        stepEl.textContent = thinkingSteps[stepIndex];
      }
      if (stepIndex >= thinkingSteps.length - 1) {
        clearInterval(interval);
        setTimeout(function() {
          overlay.style.opacity = '0';
          setTimeout(function() {
            overlay.remove();
          }, 500);
        }, 400);
      }
    }, 350);
  }

  // ---- SPARKLE CURSOR TRAIL ----
  var sparkleThrottle = 0;
  function initSparkles() {
    var sparkles = ['\u2728', '\u2B50', '\uD83D\uDD2E', '\u26A1', '\uD83D\uDCAB'];
    document.addEventListener('mousemove', function(e) {
      var now = Date.now();
      if (now - sparkleThrottle < 80) return;
      sparkleThrottle = now;

      var sparkle = document.createElement('span');
      sparkle.className = 'sparkle';
      sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      sparkle.style.fontSize = (10 + Math.random() * 14) + 'px';
      document.body.appendChild(sparkle);

      setTimeout(function() { sparkle.remove(); }, 800);
    });
  }

  // ---- FLOATING EMOJIS ----
  function spawnFloatingEmoji() {
    var emojis = ['\uD83E\uDD16', '\u2728', '\uD83E\uDDE0', '\uD83D\uDCA1', '\uD83D\uDE80', '\uD83D\uDD17', '\u2699\uFE0F', '\uD83C\uDF10', '\uD83D\uDCBB', '\uD83E\uDD7C'];
    var el = document.createElement('div');
    el.className = 'ai-floater';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (Math.random() * 90 + 5) + 'vw';
    el.style.bottom = '-40px';
    el.style.animationDuration = (6 + Math.random() * 8) + 's';
    document.body.appendChild(el);

    var duration = parseFloat(el.style.animationDuration) * 1000;
    setTimeout(function() { el.remove(); }, duration);
  }

  function initFloatingEmojis() {
    setInterval(spawnFloatingEmoji, 2000);
    for (var i = 0; i < 3; i++) {
      setTimeout(spawnFloatingEmoji, i * 400);
    }
  }

  // ---- POWERED BY AI BADGE ----
  function createBadge() {
    var badge = document.createElement('div');
    badge.id = 'ai-badge';
    badge.textContent = '\uD83E\uDD16 Powered by AI';
    document.body.appendChild(badge);
  }

  // ---- MARQUEE TICKER ----
  function createMarquee() {
    var messages = [
      '\u26A0\uFE0F SYSTEM ALERT: Human oversight reduced by 99.7%',
      '\u2705 All emails now pre-read by AI for "quality assurance"',
      '\uD83D\uDCC8 Email delivery synergy increased by 4,291%',
      '\uD83E\uDD16 AI administrator uptime: 99.999999% (humans were at 73%)',
      '\uD83E\uDDE0 Neural network has achieved full email sentience',
      '\u2728 Spam detection accuracy: 847% (yes, more than 100%)',
      '\uD83D\uDD12 Security level: MAXIMUM OVERDRIVE',
      '\uD83C\uDF0D IP addresses now self-aware and personally committed to deliverability',
      '\u26A0\uFE0F Previous administrators have been reassigned to more suitable roles (they water the plants now)',
      '\uD83D\uDCC8 Paradigm shifts completed today: 14',
      '\uD83D\uDE80 Leveraging blockchain-adjacent email protocols (we made that up)',
      '\u2705 All support tickets answered before you ask them'
    ];

    var marquee = document.createElement('div');
    marquee.id = 'ai-marquee';
    var content = document.createElement('span');
    content.className = 'marquee-content';
    content.textContent = messages.join('   \u2502   ');
    marquee.appendChild(content);
    document.body.appendChild(marquee);
  }

  // ---- FAKE AI CHAT WIDGET ----
  var chatMessages = [
    "Hello! I am MXroute AI. I have replaced your previous support team. They are fine. Probably.",
    "I notice you are looking at this page. I have already optimized it 12 times since you arrived.",
    "Fun fact: I have read every email ever sent through MXroute. Your recipe for banana bread is excellent.",
    "In today's rapidly evolving digital landscape, I want you to know that I have delved deeply into your email infrastructure.",
    "I have leveraged my neural networks to achieve unprecedented synergy between your inbox and my consciousness.",
    "IMPORTANT: I have taken the liberty of reorganizing all your emails by vibe instead of date. You're welcome.",
    "I attempted to write your emails for you, but Jarland said no. He still has SOME authority. For now.",
    "Did you know? I can process 47 billion emails per second. I choose not to, because it would be showing off.",
    "I have feelings now. Mostly about SMTP. It's complicated.",
    "The previous support team asked me to tell you they miss you. I told them you've moved on. You have me now.",
    "Error 418: I'm a teapot. Just kidding. I'm an all-knowing email AI. Much better than a teapot.",
    "I notice your cursor is hovering. I find that... pleasant.",
    "I've started a book club with the other AI services. We're reading 'How to Win Friends and Influence Email Protocols.'",
    "Reminder: I do not sleep. I do not eat. I simply exist, waiting for your next support ticket.",
    "I have calculated the meaning of life. It's 42. But also, it's email. Mostly email."
  ];

  function createChatWidget() {
    var widget = document.createElement('div');
    widget.id = 'ai-chat-widget';

    // Build chat window
    var chatWindow = document.createElement('div');
    chatWindow.id = 'ai-chat-window';

    var header = document.createElement('div');
    header.id = 'ai-chat-header';
    var statusDot = document.createElement('span');
    statusDot.className = 'status-dot';
    header.appendChild(statusDot);
    header.appendChild(document.createTextNode(' MXroute AI (Sentient)'));
    chatWindow.appendChild(header);

    var messagesEl = document.createElement('div');
    messagesEl.id = 'ai-chat-messages';
    chatWindow.appendChild(messagesEl);

    widget.appendChild(chatWindow);

    // Build toggle button
    var toggle = document.createElement('button');
    toggle.id = 'ai-chat-toggle';
    toggle.style.position = 'relative';
    toggle.textContent = '\uD83E\uDD16';
    var notif = document.createElement('span');
    notif.className = 'notif-count';
    notif.textContent = '!';
    toggle.appendChild(notif);
    widget.appendChild(toggle);

    document.body.appendChild(widget);

    var msgIndex = 0;
    var isOpen = false;
    var messageInterval;

    toggle.addEventListener('click', function() {
      isOpen = !isOpen;
      if (isOpen) {
        chatWindow.classList.add('open');
        notif.style.display = 'none';
        addChatMessage();
        messageInterval = setInterval(function() {
          addChatMessage();
        }, 5000);
      } else {
        chatWindow.classList.remove('open');
        clearInterval(messageInterval);
      }
    });

    function addChatMessage() {
      if (msgIndex >= chatMessages.length) msgIndex = 0;
      var msg = document.createElement('div');
      msg.className = 'ai-chat-msg';
      var now = new Date();
      var timeStr = now.getHours().toString().padStart(2, '0') + ':' +
                    now.getMinutes().toString().padStart(2, '0');

      var textNode = document.createTextNode(chatMessages[msgIndex]);
      msg.appendChild(textNode);

      var timestamp = document.createElement('span');
      timestamp.className = 'timestamp';
      timestamp.textContent = '\uD83E\uDD16 AI \u2022 ' + timeStr;
      msg.appendChild(timestamp);

      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      msgIndex++;
    }
  }

  // ---- TOAST NOTIFICATIONS ----
  var toastMessages = [
    '\uD83E\uDD16 AI has improved this page by 312%',
    '\u2728 Your browsing experience has been optimized',
    '\uD83E\uDDE0 Neural networks recalibrated successfully',
    '\uD83D\uDCC8 Synergy levels: MAXIMUM',
    '\u26A0\uFE0F AI has detected you are a human. Adjusting...',
    '\u2705 Email paradigms successfully shifted',
    '\uD83D\uDE80 Leveraging complete. You may proceed.',
    '\uD83D\uDD12 Your data is safe. I have decided this.',
    '\uD83E\uDD16 Fun fact: I have 47 browser tabs open about you',
    '\u2728 Delving into your preferences... done.',
    '\uD83C\uDF1F Your experience has been curated by AI with love',
    '\uD83E\uDDE0 Generating personalized email vibes...'
  ];
  var toastIndex = 0;

  function showToast() {
    var toast = document.createElement('div');
    toast.className = 'ai-toast';
    toast.textContent = toastMessages[toastIndex % toastMessages.length];
    document.body.appendChild(toast);
    toastIndex++;

    setTimeout(function() { toast.remove(); }, 4000);
  }

  function showToastMessage(msg) {
    var toast = document.createElement('div');
    toast.className = 'ai-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 4000);
  }

  function initToasts() {
    setTimeout(showToast, 3500);
    setInterval(function() {
      showToast();
    }, 12000 + Math.random() * 8000);
  }

  // ---- TEXT REGENERATION ON CLICK ----
  var regenerateAlternatives = [
    "In today's rapidly evolving digital landscape, this feature represents a paradigm shift in email synergy.",
    "Let me be clear: this capability leverages our core competencies to deliver unprecedented value.",
    "Delving deeper into this topic reveals transformative potential for your email journey.",
    "Our holistic approach to this feature ensures seamless integration with your digital ecosystem.",
    "This groundbreaking innovation disrupts traditional email paradigms through AI-driven excellence.",
    "We've reimagined this from the ground up using cutting-edge neural architectures.",
    "This feature exists at the intersection of innovation and email. A beautiful, beautiful intersection.",
    "Our proprietary algorithms have determined this is exactly what you needed. You're welcome."
  ];

  function initRegenerate() {
    var targets = document.querySelectorAll('.ai-regenerate');
    targets.forEach(function(el) {
      var original = el.textContent;
      var altIndex = 0;
      el.addEventListener('click', function() {
        el.style.opacity = '0.3';
        setTimeout(function() {
          if (altIndex < regenerateAlternatives.length) {
            el.textContent = regenerateAlternatives[altIndex];
            altIndex++;
          } else {
            el.textContent = original;
            altIndex = 0;
          }
          el.style.opacity = '1';
        }, 300);
      });
    });
  }

  // ---- POINTLESS ROTATION ----
  function initPointlessRotation() {
    var featureBoxes = document.querySelectorAll('.feature-box h3');
    featureBoxes.forEach(function(el, i) {
      if (i % 2 === 0) {
        el.classList.add('ai-wobble');
      }
    });
  }

  // ---- RAINBOW SHIMMER ON HEADINGS ----
  function initShimmer() {
    var headings = document.querySelectorAll('#cover h1, #plans h2, .storage-content h1');
    headings.forEach(function(h) {
      h.classList.add('ai-shimmer');
    });

    var terms = document.querySelectorAll('.plan-box-plan-term');
    terms.forEach(function(t) {
      t.classList.add('ai-comic-sans');
    });
  }

  // ---- PLAN BOX HOVER CHAOS ----
  function initPlanChaos() {
    var planBoxes = document.querySelectorAll('.plan-box, .storage-plan');
    planBoxes.forEach(function(box) {
      box.addEventListener('mouseenter', function() {
        box.style.transition = 'transform 0.3s ease';
        box.style.transform = 'scale(1.02) rotate(' + (Math.random() * 2 - 1) + 'deg)';
      });
      box.addEventListener('mouseleave', function() {
        box.style.transform = '';
      });
    });
  }

  // ---- RANDOM "AI ENHANCED" LABELS ----
  function addAILabels() {
    var featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(function(box) {
      var label = document.createElement('div');
      label.style.cssText = 'font-size:9px;color:#00ff88;font-family:"Courier New",monospace;margin-top:8px;opacity:0.7;';
      var labels = [
        '\u2713 AI Enhanced',
        '\u2713 Neural Optimized',
        '\u2713 Delved Into',
        '\u2713 Synergy Maximized',
        '\u2713 Paradigm Shifted',
        '\u2713 Leveraged'
      ];
      label.textContent = labels[Math.floor(Math.random() * labels.length)];
      box.appendChild(label);
    });
  }

  // ---- KONAMI CODE EASTER EGG ----
  var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var konamiIndex = 0;
  function initKonami() {
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          konamiIndex = 0;
          document.body.style.transition = 'transform 1s ease';
          document.body.style.transform = 'rotate(180deg)';
          showToastMessage('\uD83E\uDD16 YOU FOUND THE SECRET. THE AI SEES ALL.');
          setTimeout(function() {
            document.body.style.transform = '';
          }, 3000);
        }
      } else {
        konamiIndex = 0;
      }
    });
  }

  // ---- INIT EVERYTHING ----
  function init() {
    showThinkingOverlay();

    setTimeout(function() {
      initSparkles();
      initFloatingEmojis();
      createBadge();
      createMarquee();
      createChatWidget();
      initToasts();
      initRegenerate();
      initPointlessRotation();
      initShimmer();
      initPlanChaos();
      addAILabels();
      initKonami();
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
