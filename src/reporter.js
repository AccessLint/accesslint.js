export default function(message, logger) {
  var violations = message.violations.map(function(violation) {
    return {
      description: violation.description,
      help: violation.help,
      impact: violation.impact,
      nodes: violation.nodes.map(function(n) {
        return document.querySelector(n.target);
      }),
    };
  });

  violations.forEach(function(violation) {
    logger.warn(violation);
  });
}
