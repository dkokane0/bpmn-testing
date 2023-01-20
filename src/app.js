// we use stringify to inline an example XML document
import taskDiagram from '../resources/task.bpmn';
// import taskDiagram from '../resources/pizza-collaboration.bpmn';
import BpmnViewer from 'bpmn-js';
import bpmnJS from 'bpmn-js';


var viewer = new BpmnViewer({
  container: '#canvas'
});


viewer.importXML(taskDiagram).then(function(result) {

  const { warnings } = result;

  console.log('success !', warnings);

  viewer.get('canvas').zoom('fit-viewport');
}).catch(function(err) {

  const { warnings, message } = err;

  console.log('something went wrong:', warnings, message);
});


// var elementRegistry = bpmnJS.get('elementRegistry');

// var sequenceFlowElement = elementRegistry.get('SequenceFlow_1'),
//     sequenceFlow = sequenceFlowElement.businessObject;

// sequenceFlow.name; // 'YES'
// sequenceFlow.conditionExpression; // ModdleElement { $type: 'bpmn:FormalExpression', ... }


// console.log(sequenceFlow.name);